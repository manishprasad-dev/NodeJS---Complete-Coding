const http = require("http");

const server = http.createServer((req , res) => {
    

    if(req.url == "/"){
        // console.log("Welcome To Home");
        // res.write("Welcome To Home Page");
        res.setHeader("Content-Type" , "text/html");

        res.write("<html>");
        res.write("<head>");
        res.write("<title>Home Page</title>")
        res.write("<body><h1>Welcome To The Home Page</h1></body>")
        res.write("</head>");
        res.write("</html>");



        res.end(); // ! Indicates no more data will be send for this response in future
    }else if(req.url === "/about"){
        // res.write("Welcome To about us section of the website")

res.setHeader("Content-Type" , "text/html");

        res.write("<html>");
        res.write("<head>");
        res.write("<title>About Us</title>")
        res.write("<body><h1>Welcome To The About Us Section</h1></body>")
        res.write("</head>");
        res.write("</html>");

        res.end();
    }

});

const PORT = 3004;
server.listen(PORT , () => {
    console.log(`Server Is running at address http://localhost:${PORT}`);
});