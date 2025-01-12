const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.method);

  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write(
      "<body><h1>Enter Message</h1><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
      console.log(body);
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      const message = parseBody.split("=")[1];
      fs.writeFileSync("message.text", message);
      res.writeHead(302, { location: "/" });
      res.end();
    });
  }

  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First App</title></head>");
  res.write("<body><h1>Hello World From Node Js Server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
