import { fileURLToPath } from "url";
import "./config.js"; // Assuming config.js is an ES module
import http from "http";
import { dirname } from "path";
import { page, type } from "./backend/helpers/asset.js";

const PORT = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  console.log(url.pathname);
  if (url.pathname.includes(".")) {
    type(res, url.pathname);
  }
  if (url.pathname == "/") page(res);
});

server.listen(PORT, () => {
  console.log("Server is listening at port " + PORT);
});
