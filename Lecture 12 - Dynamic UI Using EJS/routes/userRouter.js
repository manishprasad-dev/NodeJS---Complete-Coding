const express = require('express');

const userRouter = express.Router();
const path = require('path');



//now we will make routes for different pages of the web page

userRouter.get('/products' , (req , res )=>{
    res.send(`
        <h1>Hello This Is Products Page</h1>
        <h1>View Product</h1>
        <h2>Product One </h1>
        <h2>Product Two</h1>
    `);
    // or
    // res.sendFile()
});
userRouter.get('/contact' , (req , res )=>{
    res.send(`
        <h1>Hello This Is Contact Page</h1>
    `);
    // or
    // res.sendFile()
});


module.exports = userRouter;