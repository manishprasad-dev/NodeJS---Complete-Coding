// this file is used to handle all the routes that are related to admin functionality. It is a separate router that is mounted on the main app router.

const express = require('express');
const adminRouter = express.Router();  

const path = require("path");

adminRouter.get("/add-products-adminrouter" , (req , res)=>{
    console.log("This is add products route, which is for admin only");
    // res.send(
    //     `
        
    //     <h1>This is add products route, which is for admin only</h1>
        

    //     <h2> This route is handled in the admin-router.js file using express routers concept</h2>

    //     `
    // );

    res.sendFile(path.join(__dirname  , '..' , 'views' , 'add-products-admin.html'));
});

adminRouter.get("/delete-products-adminrouter" , (req , res)=>{
    console.log("This is delete products route, which is for admin only");
    // res.send(
    //     `
    //     <h1>This is delete products route, which is for admin only</h1>
    //     <h2> This route is handled in the admin-router.js file using express routers concept</h2>
    //     `
    // );   
    res.sendFile(path.join(__dirname  , '..' , 'views' , 'delete-products-admin.html'));

});

module.exports = adminRouter;