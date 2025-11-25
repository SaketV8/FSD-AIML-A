import http from "http";

const html_home = "<h1>Home page :)</h1>";
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // res.write("This is Home Page");

    // res.writeHead(200, { "content-type": "text/text" });
    res.writeHead(200, { "content-type": "text/html" });
    // res.writeHead(200, { "content-type": "text/json" });

    // this <csv> will automatically downloaded
    // res.writeHead(200, { "content-type": "text/csv" });

    res.write(html_home);
  } else if (req.url === "/about") {
    res.write("About Page");
  } else if (req.url === "/data" && req.method === "POST") {
    let body = "";

    // get data chunks
    req.on("data", (chunk) => {
      body += chunk;
    });

    // after all data is received
    req.on("end", () => {
      try {
        const parsed = JSON.parse(body);

        res.writeHead(200, { "content-type": "application/json" });

        // res.end = write + end
        res.end(
          JSON.stringify({
            message: "POST data received successfully!",
            received: parsed,
          })
        );
      } catch (err) {
        res.writeHead(400, { "content-type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON format" }));
      }
    });

    // stop further execution
    return;
  } else {
    // res.write("Error: URL not found as per your requirement!");

    res.writeHead(404, { "content-type": "text/html" });
    res.write("Error: URL not found as per your requirement!");
  }

  res.end();
});

const port = 8787;
server.listen(port, () => {
  console.log(`🌸 Server is running on http://localhost:${port}`);
});
