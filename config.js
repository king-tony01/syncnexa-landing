import dotenv from "dotenv";
import fs from "fs";

const env = process.env.NODE_ENV || "development";
const envFile = `.env.${env}`;

if (fs.existsSync(envFile)) {
  dotenv.config({ path: envFile });
} else {
  console.warn(`No environment file found for ${env}`);
}
