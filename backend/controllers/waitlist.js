import { createConnection } from "mysql2/promise";
import { readFileSync } from "fs";

// Create a pool of connections
const databaseConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT || 3306,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  ssl: process.env.DB_SSL ? { ca: readFileSync("./ca.pem") } : false,
};

let pool;

export async function initializePool() {
  pool = await createConnection(databaseConfig);
}

export async function create({ id, email, first, last }) {
  try {
    const connection = await pool.getConnection();

    await connection.beginTransaction();

    const existQuery = `SELECT first_name, last_name, email FROM waitlist WHERE email = ? AND first_name = ? AND last_name = ?`;
    const [existingRows] = await connection.query(existQuery, [
      email,
      first,
      last,
    ]);

    if (existingRows.length > 0) {
      await connection.release();
      return {
        stat: false,
        code: 2,
        message: "You have already subscribed before buddy!",
      };
    }

    const insertQuery = `INSERT INTO waitlist(id, email, first_name, last_name) VALUES (?, ?, ?, ?)`;
    await connection.query(insertQuery, [id, email, first, last]);

    await connection.commit();
    await connection.release();

    return {
      stat: true,
      code: 1,
      message:
        "You have successfully subscribed for the waitlist. Stay tuned for the launch!",
    };
  } catch (err) {
    console.error("Error in create function:", err);

    if (connection) {
      await connection.rollback();
      await connection.release();
    }

    return {
      stat: false,
      code: 3,
      message:
        "Sorry, we couldn't perform the operation. Don't worry it's on us and our engineers are doing something about it.",
    };
  }
}
