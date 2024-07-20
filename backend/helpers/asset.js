import { extname, join } from "path";
import { __dirname } from "../../server.js";
import { readFile } from "fs";
import { jsonResponse } from "./json.js";
export function page(response) {
  const filePath = join(__dirname, "index.html");
  readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      jsonResponse(
        {
          message: "Error reading the page file",
          err: err,
        },
        response,
        500
      );
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    }
  });
}

export function type(response, root) {
  const filePath = join(__dirname, root);
  const extension = extname(root);
  let encoding;
  let contentType;

  switch (extension) {
    case ".css":
      encoding = "utf-8";
      contentType = "text/css";
      break;
    case ".js":
      encoding = "utf-8";
      contentType = "application/javascript";
      break;
    case ".webmanifest":
      encoding = "utf-8";
      contentType = "application/manifest+json";
      break;
    case ".png":
      encoding = "";
      contentType = "image/png";
      break;
    case ".jpg":
    case ".jpeg":
      encoding = "";
      contentType = "image/jpeg";
      break;
  }
  sendFile(response, filePath, encoding, contentType);
}

function sendFile(response, path, encoding, contentType) {
  readFile(path, encoding, (err, data) => {
    if (err) {
      console.log(err);
      jsonResponse(
        {
          message: "Error reading the page file",
          err: err,
        },
        response,
        500
      );
    } else {
      response.writeHead(200, { "Content-Type": contentType });
      response.end(data);
    }
  });
}
