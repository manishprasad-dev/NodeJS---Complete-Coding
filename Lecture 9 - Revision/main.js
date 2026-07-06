const express = require("express");
const app = express(); // returns an application

//Handling all client stuff only be handle here

app.use("/home",(req , res , next)=>{
    console.log("Hey Dude This Is The First Middleware " , req.url , req.method);
    res.send("<p>Welcome Dude This Is First Middleware</p>")
})

app.use("/product" ,(req , res , next)=>{
    console.log("Hey Dude This Is The Second Middleware " , req.url , req.method);
    res.send("<p>Welcome Dude This Is Second Middleware And as well as the product section</p>")
})



const PORT = 3003;
app.listen(PORT , () =>{
    console.log(`Server is running on address http://localhost:${PORT}`);
})