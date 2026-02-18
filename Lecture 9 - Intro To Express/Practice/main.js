//External Module
const express = require("express");
// Core Module
const http = require("http");

const app = express();


app.use((req , res, next)=>{
    console.log("This is First middleware", req.url , req.method);
    next();
});
app.use((req , res, next)=>{
    console.log("This is second middleware", req.url , req.method);
    next();
});

//! It Don't let execute other middleware if url is not mentioned
app.get((req , res, next)=>{
        console.log("This is Thrid middleware with response", req.url , req.method);
        res.send("This is thrid middleware with response");
    });
    
app.get("/contactus",(req , res, next)=>{
    console.log("This is second middleware", req.url , req.method);

    res.send(`
        <h1>Enter Your Details Here</h1>
        <form action = "contactus" method = "POST>
            <input type = "text" name = "name" placeholder = "Enter Your Name"/>
            <input type = "email" name = "email" placeholder = "Enter Your Email"/>
            <input type = "submit"/>
        </form action = "contactus">
    `);});
app.post("/contactus",(req , res, next)=>{
    console.log("This is post contact-us middleware" , req.url , req.method);
    res.send(`<h1>"You Will Contact You In A While"</h1>`);
});
const server = http.createServer(app); // creates the server
const PORT = 3001;
server.listen(PORT , () => {
    console.log(`Server Is running at address http://localhost:${PORT}`);
});