// import { fileURLToPath } from "url";
// import "./config.js"; // Assuming config.js is an ES module
// import http from "http";
// import { dirname } from "path";
// import { page, type } from "./backend/helpers/asset.js";
// import { parsePostRequest } from "./backend/helpers/parser.js";
// import { generateID } from "./backend/helpers/generator.js";
// import { create } from "./backend/controllers/waitlist.js";
// import { jsonResponse } from "./backend/helpers/json.js";

// const PORT = process.env.PORT;

// const __filename = fileURLToPath(import.meta.url);
// export const __dirname = dirname(__filename);

// const server = http.createServer((req, res) => {
//   const url = new URL(req.url, `http://${req.headers.host}`);

//   if (url.pathname.includes(".")) {
//     type(res, url.pathname);
//   } else if (url.pathname !== "/api/waitlist") {
//     page(res);
//   } else {
//     parsePostRequest(req, async function (data) {
//       console.log(data);
//       data["id"] = generateID(70);
//       const dbResponse = await create({ ...data });
//       if (dbResponse.stat && dbResponse.code == 1) {
//         jsonResponse(dbResponse, res, 200);
//       } else if (dbResponse.code == 2) {
//         jsonResponse(dbResponse, res, 409);
//       } else {
//         jsonResponse(dbResponse, res, 422);
//       }
//     });
//   }
// });

// server.listen(PORT, () => {
//   console.log("Server is listening at port " + PORT);
// });
