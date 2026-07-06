const express = require('express');


const path = require("path");
const app = express(); // returns an application


//set the view engine as ejs -! first step
app.set('view engine' , 'ejs'); //views will be pointes towards the views folder
// view engine is used to render the view files. It is used to set the view engine as ejs. It will look for the views folder in the root directory and then look for the file name which we have provided in the render method.

//set the dir name for views - Second step
app.set('views' , path.join(__dirname , 'views')) ;//views will be denotes to the views folder
// path.join() method is used to join the directory name with the views folder. It will return the absolute path of the views folder. __dirname is a global variable which returns the directory name of the current module. It will return the absolute path of the current module.



const products = [
    {
        id: 1,
        title : "Product 1",
    },
    {
        id: 2,
        title : "Product 2",
    },
    {
        id: 3,
        title : "Product3",
    },
    {
        id: 4,
        title : "Product4",
    },
    {
        id: 5,
        title : "Product5",
    },
    {
        id: 6,
        title : "Product 6",
    },


]
const service = [
    {
        id: 1, 
        title : "Service 1",
    },
    {
        id: 2, 
        title : "Service 2",
    },
    {
        id: 3, 
        title : "Service 3",
    },
    {
        id: 4, 
        title : "Service 4",
    },
]

app.get('/', (req, res)=>{
    //controller 1
    res.render('home',{title : 'Home Page' , products : products, services : service})

    //what is home in res.render('home')? It is the name of the view file which we want to render. It will look for the home.ejs file in the views folder and render it.

    // controller 1 is responsible for rendering the home page with the provided data
});

app.get('/about', (req, res)=>{
    //controller 2
    res.render('about',{title : 'About Page' , services : service}) 
    // res.render() is used to render the view and send the response to the client. It takes two arguments, first is the name of the view file and second is an object which contains the data that we want to pass to the view

    // what is the title field in the object? It is used to set the title of the page. We can use it in the view file to set the title of the page dynamically.
});
// when we use res.render() it will automatically look for the views folder and then look for the file name which we have provided in the render method.

const PORT = 3000;

app.listen(PORT , ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})

// explain me the full code in detail. I want to understand it fully.
// In this code, we are creating a simple web application using Express.js and EJS as the templating engine.
// We first import the required modules, express and path. We then create an instance of the express application using express() function.
// We then set the view engine as ejs using app.set('view engine', 'ejs') and set the views directory using app.set('views', path.join(__dirname, 'views')).
// We then create two arrays, products and service, which contain the data that we want to pass to the view files. Each array contains objects with id and title properties.
// We then define two routes, '/' and '/about', using app.get() method. In the first route, we render the home.ejs view file and pass the title, products, and services data to it. In the second route, we render the about.ejs view file and pass the title and services data to it.
// Finally, we start the server on port 3000 using app.listen() method and log a message to the console indicating that the server is running.
