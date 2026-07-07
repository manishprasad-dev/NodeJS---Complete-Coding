// we will cover express routers concept in this file

const express = require('express');
const app = express();
const router = express.Router();
const http = require("http");

//core module
const path = require("path");

//Local Module
const userRouter = require("./routes/users-router");
const adminRouter = require("./routes/admin-router");



//? Using the userRouter for all routes starting with /user
app.use("/user" , userRouter);
// passing /users means that all the routes that are defined in the userRouter file will be prefixed with /user. So if we want to access the about route of userRouter, we have to use /user/about in the browser. Similarly, if we want to access the contact route of userRouter, we have to use /user/contact in the browser.

//! explanation - we are handling all routes in userRouter file which starts with /user. So we are using the userRouter for all routes starting with /user. So if we want to access the about route of userRouter, we have to use /user/about in the browser. Similarly, if we want to access the contact route of userRouter, we have to use /user/contact in the browser.

//? Using the adminRouter for all routes starting with /admin
app.use("/admin" , adminRouter);

//! explanation - we are handling all routes in adminRouter file which starts with /admin. So we are using the adminRouter for all routes starting with /admin. So if we want to access the add-products route of adminRouter, we have to use /admin/add-products in the browser. Similarly, if we want to access the delete-products route of adminRouter, we have to use /admin/delete-products in the browser.
app.get("/" , (req , res)=>{
    console.log("This is home route");
    
    res.sendFile(path.join(__dirname  , 'views' , 'user-home.html'));
});
app.use((req ,res )=>{
    console.log("This is first middleware" , req.url , req.method);
    res.status(404).sendFile(path.join(__dirname  , 'views' , '404.html'));
    
    // 


    //once the response is sent, the request-response cycle is completed and we cannot call next() after sending the response. So we should not call next() after sending the response. If we call next() after sending the response, it will throw an error. So we should not call next() after sending the response. We can use next() only if we want to pass the control to the next middleware or route handler in the stack. But in this case, we have already sent the response, so we should not call next() after sending the response.

    // first the route will be checked in the userRouter file, if the route is not found in the userRouter file, then it will be checked in the adminRouter file, if the route is not found in the adminRouter file, then it will be checked in this middleware. If the route is not found in this middleware, then it will throw an error 404 page not found. So we should not call next() after sending the response. We can use next() only if we want to pass the control to the next middleware or route handler in the stack. But in this case, we have already sent the response, so we should not call next() after sending the response.

    

    

    // next is used to move to the next middleware or route handler in the stack. It allows the request to continue through the middleware chain, enabling multiple middleware functions to process the request before sending a response.
});

//home router is for everyone (users and admin)
app.get("/home" , (req , res)=>{
    console.log("This is home route");
    res.send(
        `<h1>This is home route</h1>

        <ul>
            <label>Click on the below links to navigate to different routes</label>
            <br> <br> <br>
            <label> For Users </label>
            <li><a href="/user/about">About</a></li>
            <li><a href="/user/contact">Contact</a></li>
            <br>
            <label> For Admin </label>
            <li><a href="/admin/add-products">Add Products</a></li>
            <li><a href="/admin/delete-products">Delete Products</a></li>
        </ul>
        `
    );
});

app.get("/user/about" , (req , res)=>{
    console.log("This is about route");
    res.send(
        `<h1>This is about route</h1>`
    );
});

app.get("/user/contact" , (req , res)=>{
    console.log("This is contact route");
    res.send(
        `<h1>This is contact route</h1>`
    );
});

app.get("/admin/add-products-inapp-router" , (req , res)=>{
    console.log("This is add products route, which is for admin only");
    res.send(
        `
        <h1>This is add products route, admin only</h1>
        
        <h1> This route is handled in the main app.js file, but we will handle this route in the admin-router.js file using express routers concept</h1>

        <h2>Alternative address of this route is /admin/add-products-adminrouter which is handled in the admin-router.js file using express routers concept</h2>

        `
    );
});

app.get("/admin/delete-products-inapp-router" , (req , res)=>{
    console.log("This is delete products route, which is for admin only");
    res.send(
        `
        <h1>This is delete products route, admin only</h1>
        <h1> This route is handled in the main app.js file, but we will handle this route in the admin-router.js file using express routers concept</h1>

        <h2>Alternative address of this route is /admin/delete-products-adminrouter which is handled in the admin-router.js file using express routers concept</h2>
        
        `
        
    );
});


const PORT = 3002;
const server = http.createServer(app);


server.listen(PORT , ()=>{
    console.log(`Server is running at address http://localhost:${PORT}`);
});

//So the problem with this approach is that we have to write the routes for users and admin in the same file, which is not a good practice. So we will use express routers to separate the routes for users and admin in different files.

// all user routes will be in users.js file and all admin routes will be in admin.js file. And we will use express routers to separate the routes for users and admin in different files.