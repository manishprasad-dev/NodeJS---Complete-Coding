const express = require('express');


const userRouter = express.Router();
const path = require("path");


userRouter.get("/about",(req, res , next)=>{
    console.log("This is about route of user router" , req.url , req.method);
    // res.send(
    //     `<h1>This is about route of user router</h1>`
    // );

    res.sendFile(path.join(__dirname , '..' , 'views' , 'user-about.html'));
});

userRouter.get("/contact",(req, res , next)=>{
    console.log("This is contact route of user router" , req.url , req.method);
    // res.send(
    //     `<h1>This is contact route of user router</h1>`
    // );

    res.sendFile(path.join(__dirname , '..' , 'views' , 'user-contact.html'));
});

userRouter.get("/products",(req, res , next)=>{
    console.log("This is products route of user router" , req.url , req.method);
    // res.send(
    //     `<h1>This is products route of user router, which is for users only</h1>`
    // );

    res.sendFile(path.join(__dirname , '..' , 'views' , 'products.html'));
});


module.exports = userRouter;