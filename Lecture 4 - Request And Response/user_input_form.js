const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url == "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<body>");
        res.write("<h1>This is Home page</h1>")
        res.write(`<a href="http://localhost:3003/submit-forms"> Submit Details </a>`)
        res.write("</body>");
        res.write("</html>");
        return res.end();

    } else if (req.url == "/submit-forms") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<body>");
        res.write("<h1>Welcome to form page</h1>")
        res.write(`<form action="/submit-details" method="POST">`); //! Submit-Details Page Will Receive A POST REQUEST
        res.write(`<input type = "text" id= "name" name = "name" placeholder = "Enter Your Name"<br><br>>`);
        res.write(`<label for="gender">Gender</label>`);
        res.write(`<input type="radio" id="male" name="gender" value="male"> `);
        res.write(`<label for="male">Male</label>`);
        res.write(`<input type="radio" id="female" name="gender" value="female"> `);
        res.write(`<label for="female">female</label>`);
        res.write(`<button type = "submit">Submit</button>`);
        res.write("</form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    } else if (req.url.toLowerCase() == "/submit-details" && req.method == "POST") {
        fs.writeFileSync("stored-data.txt" , "This thing will we written the document");
        res.statusCode = 302; //! Difficuly in understanding
        res.setHeader("Location" , "/"); //? redirect to the home page 
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>This is universal page of the website hope you like it</h1>")
    res.write(`<a href="http://localhost:3003/submit-forms"> Submit Details </a> <br>`)
    res.write(`<a href="http://localhost:3003"> Home Page </a>`)
    res.write("</body>");
    res.write("</html>");
    return res.end();
})

const PORT = 3003;

server.listen(PORT, () => {
    console.log(`Server is running at address http://localhost:${PORT}`);
});