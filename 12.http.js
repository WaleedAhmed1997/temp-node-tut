const http = require("http");

// What do web server do?
// They keep on listening for requests
const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("Welome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("This is the about page");
    return;
  }
  res.end(`
    <h1>Oops!</h1>
    <p>Sorry! we are unable to find the page</p>
    <a href="/">Go back home</a>
  `);
  // if else-if (alternative to returns)
});

server.listen(5000);
