const http = require("http");
const colors = require("colors")


http.createServer((req, res) => {
    res.write("<h1>Hello, This is jakaria Node</h1>")
    res.end()
}).listen(4500);

console.log("package".red);