//? Perform Parsign using express 

//External Module
const express = require("express");
const bodyParser = require("body-parser");
// Core Module
const http = require("http");
const app = express();

//This middleware will run without any reason
// app.use((req , res, next)=>{
//     console.log("This is First Middleware", req.url , req.method);
//     // res.send(`This is the first Middleware with response ${req.url} ${req.method} `);
//     next();
// });
// app.use((req , res, next)=>{
//     console.log("This is second Middleware", req.url , req.method);
//     next();
// });
app.get("/",(req , res, next)=>{
        console.log("This is Third Middleware with response", req.url , req.method);
        res.send(`This is Third Middleware with response ${req.url} ${req.method} `);
    });
    


app.get("/contactus",(req , res, next)=>{
    console.log("This is second Middleware", req.url , req.method , req.body);

    res.send(`
        <h1>Enter Your Details Here</h1>
        <form action = "contactus" method = "POST>
            
            // <input type = "text" name = "Name" placeholder = "Enter Your Name">
            <input type = "text" name = "email" placeholder = "Enter Your Name">
            <input type = "email" name = "email" placeholder = "Enter Your Email">
            <input type = "submit">
        </form action = "contactus">
    `);});

//! Performing Parsing from here   
app.use(bodyParser.urlencoded());  


app.post("/contactus",(req , res, next)=>{
    console.log("This is post contact-us middleware" , req.url , req.method);
    res.send(`<h1>"You Will Contact You In A While"</h1>`);
});

app.get("/" , (req , res, next)=>{
    console.log("This is final middleware of the server " , req.url , req.method);
    res.send(`<h2>"This is final middleware is it working"</h2>`);
});

const server = http.createServer(app); // creates the server
const PORT = 3001;
server.listen(PORT , () => {
    console.log(`Server Is running at address http://localhost:${PORT}`);
});