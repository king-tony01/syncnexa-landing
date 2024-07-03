const dotenv = require("dotenv");
const fs = require("fs");

const env = process.env.NODE_ENV || "development";
const envFile = `.env.${env}`;

if (fs.existsSync(envFile)) {
  dotenv.config({ path: envFile });
} else {
  console.warn(`No environment file found for ${env}`);
}
