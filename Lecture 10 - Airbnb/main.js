//10.2 Going through routers 


const express = require("express");

const app = express();


//middleware runs for every middleware
app.use((req , res , next)=>{
    console.log(req.url , req.method);
    next();

});
app.use(express.urlencoded()); //checks everytime for a post request body
// if u mention the route in the get method then the code written inside the get method, only that part will be executed
app.get("/",(req , res , next)=>{
    res.send(`
        <h1>Welcome To Airbnb Find Rooms Around You ${req.url} ${req.method}</h1>    
        <a href = "/add-home">Add Home</a>

    `);
    next();
});

//we are handling the get request of the add-home page but when we click on the submit button it request for the post method, and for post method we have to define a different middleware which will of post method
app.get("/add-home", (req ,res , next)=>{
    res.send(`        
        <h1>Add Home Here ${req.url} ${req.method}</h1>
        <form actions = "/add-home" method= "POST"> 
            <input type = "text" name = "Enter House Name" placeholder = "Enter Name">
            <input type="submit">
        </form>
    
    `);
});
// Different body for different http method
app.post("/add-home", (req ,res , next)=>{
    console.log(req.body);
    res.send(`        
        <h1>Thanks For Submitting</h1>
        <h5>${req.url} ${req.method}</h5>
        
    
    `);
});

app.listen(3002 ,()=>{
    console.log("server is running at address : http://localhost:3002");
})