const express = require('express');

const hostRouter = express.Router();
const path = require('path');




//now we will make routes for different pages of the web page
const list_of_products = [];
hostRouter.get('/add-products' , (req , res , next)=>{
    res.send(`
        <h1>Add A New Product</h1>

        <form action="/host/add-products" method="POST">
            <label>Enter Product Name</label>
            <input type="text" name="productName"> <br><br>
            
            <label>Enter Product Quantity</label>
            <input type="number" name="productQuantity"> <br><br>


            <button type = "submit">SUBMIT</button>
        </form>
    `);

});

hostRouter.post("/add-products" , (req,res , next)=>{
    list_of_products.push(JSON.parse(JSON.stringify(req.body))); //we are using JSON.parse(JSON.stringify()) to make a deep copy of the object, because if we directly push the object, then it will be a reference to the same object, and if we change the object in the future, then it will change the object in the list as well, so we are making a deep copy of the object and pushing it to the list
    console.log("Product Added Successfully" , JSON.stringify(req.body));
    //why undefined? because we have not used any middleware to parse the body of the request, so we will use express.json() and express.urlencoded() middleware in index.js file
    res.send(`
        <h1>Product Added Successfully</h1> <br>
        <a href="/host/add-products">Add Another Product</a > <br>
        <a href="/home">Go To Home</a>
    `);
});

hostRouter.get('/delete-product' , (req , res )=>{
    res.send(`
        <h1>Hello This Is Delete Product Page</h1>
    `);
    // or
    // res.sendFile()
});

module.exports = hostRouter;
module.exports.list_of_products = list_of_products;
