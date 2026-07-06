const http = require("http");
const fs = require("fs");



const server = http.createServer((req, res) => { //here req and res are two objects
    console.log(req.url, req.method, req.headers)
    if (req.url == "/") {
        res.setHeader("Content-Type", "json");
        res.write("<html>");
        res.write("<body>")
        res.write("<h1>Hello I am Learning Node Js,this is the Home page</h1>")
        res.write("</body>")
        res.write("</html>");
        // res.end(); wrong, if you add this then further code will not be executed  
        return res.end();
    } else if (req.url == "/products") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<body>")
        res.write("<h1>Welcome to the product section of the website</h1>")
        res.write("</body>")
        res.write("</html>");
        return res.end();
        // we have to end the response

        //! Note once you have end the response you can't send anymore response
        //? Use return res.end()
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>We are working on it</h1>");
    res.write(`<h1>We are currently working on this page ${req.url}</h1>`);
    res.write("</body>")
    res.write("</html>");
    res.end();


});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running at address http://localhost:${PORT}`);
});