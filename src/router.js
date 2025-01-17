const router = (req, res) => {
  const endpoint = req.url;
  let allData;
  if (endpoint == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Hello");
  }
  //elephant request
  else if (endpoint == "/elephants" && req.method === "GET") {
    res.writeHead(404, { "content-type": "text/html" });

    res.end("unknown uri");
  }
  //GET blog request
  else if (endpoint == "/blog" && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });

    const jsonObj = JSON.stringify(["one", "two", "three"]);

    res.end(jsonObj);
  }

  //post Blog
  else if (
    endpoint === "/blog" &&
    req.method === "POST" &&
    req.headers.password &&
    req.headers.password === "potato"
  ) {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(JSON.parse(data)));
    });
  } else if (
    endpoint === "/blog" &&
    req.method === "POST" &&
    req.headers.password
  ) {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      if (!data) {
        res.writeHead(302, { location: "/blog" });
      }
      res.end();
    });
  } else if (req.url === "/blog" && req.method === "POST") {
    res.writeHead(403, { "content-type": "text/html" });
    res.end("Forbidden");
  } else {
    writeHead(404, "text/html");
    res.end("UnknownURi");
  }
};
module.exports = router;
