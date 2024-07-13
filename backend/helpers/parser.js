export function parsePostRequest(request, callback) {
  let body;
  request.on("data", (chunk) => {
    body = chunk;
  });
  request.on("end", () => {
    callback(JSON.parse(body));
  });
}
