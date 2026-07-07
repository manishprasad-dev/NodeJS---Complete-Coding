//what we are trying to do!
//we want to show dynamic content into the webpage, to do so we have two option for now
//first one : by passing data through list in form of module to different files in form of list
//second one : is by using ejs to pass dynamic content

//we will initialize a empty list in hostrouter file, and when the host add products to the site, then we will show it to other webpages



const express = require('express');
const app = express();

const path = require('path');
const router = express.Router();

const http = require('http');

const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const list_of_products = hostRouter.list_of_products;

app.use('/user' , userRouter);
app.use('/host' , hostRouter);

app.use('/home' , (req , res) =>{
    res.send(`
        <h1>Hello This is the home page</h1>
        <h2>List of Products</h2>
        

        <ul>
            ${list_of_products.map((product , index)=>{
                return `<li>Product Name : ${product.productName} , Product Quantity : ${product.productQuantity}</li>`;
            }).join('')}
        </ul>
        

        <a href="/host/add-products">Add A New Product</a> <br>


    `);

});


const PORT = 3000;
const server = http.createServer(app); 
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}` + '/home');
});

// Note :-
// instead of doing this, we can also use ejs to pass dynamic content to the webpage, which we will see in the next lecture.
// by using ejs, we can pass dynamic content to the webpage without using list and module, which is a better way to do it.
// the problem with using list and module is that, if we have multiple users, then the list will be shared among all the users, which is not a good thing, so we will use ejs to pass dynamic content to the webpage, which we will see in the next lecture.