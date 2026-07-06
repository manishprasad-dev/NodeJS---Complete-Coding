//10.2 Going through routers 

const path = require("path");

const express = require("express");
const userRouter = require("./Routes/userRouter");
const hostRouter = require("./Routes/hostRouter");
const app = express();

//Handles every middleware
app.use((req , res , next)=>{
    console.log(req.url , req.method);
    next();
});
app.use(express.urlencoded());

app.use(userRouter);
app.use("/host",hostRouter);

//works for all routes
app.get((req , res ,next)=>{
    // res.status(404).send("<h1>Error 404 : Page Not Found</h1>")
    // res.sendFile(path.join(__dirname , '../' , 'views' , '404.html'));
    res.status(404).sendFile(path.join(__dirname,"views","404.html"));
    
});

app.listen(3002 ,()=>{
    console.log("server is running at address : http://localhost:3002");
})