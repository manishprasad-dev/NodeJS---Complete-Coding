const express = require("express");
const hostRouter = express.Router();
const path = require("path");


hostRouter.get("/add-home", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", 'views', 'add-home-get.html'))
});
// Different body for different http method
hostRouter.post("/add-home", (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(__dirname, "../", 'views', 'add-home-post.html'))

});

module.exports = hostRouter;