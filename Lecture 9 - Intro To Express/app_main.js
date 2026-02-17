//External Module
const express = require("express");
// Core Module
const http = require("http");

const app = express();

app.get("/" , (req , res , next) => {
    console.log("This is First MidleWare", req.url , req.method); // it will not passed to the second middleware until next() is attached
    res.send("<p>This is first middleware of the server</p>"); //send has end capabily, like it ends the server
    next();
});
app.use("/submit-details" ,(req , res , next) =>{
    console.log("This is Second Middleware", req.url , req.method);
    res.send("<p>This is second middleware</p>"); //send has end capabily, like it ends the server
});
app.use("/about" ,(req , res , next) =>{
    console.log("This is Second Middleware", req.url , req.method);
    res.send("<p>This is about section middleware</p>"); //send has end capabily, like it ends the server
});
const server = http.createServer(app); // creates the server
const PORT = 3001;
server.listen(PORT , () => {
    console.log(`Server Is running at address http://localhost:${PORT}`);
});