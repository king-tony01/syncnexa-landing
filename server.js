import "./config.s"; // Assuming config.js is an ES module
import http from "http";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Server is currently working buddy");
});

server.listen(PORT, () => {
  console.log("Server is listening at port " + PORT);
});
