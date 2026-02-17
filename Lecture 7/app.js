const http = require("http");


const server = http.createServer((req , res) =>{
    res.write("I am okay");
    res.write("Are you okay");
    res.end();
});



const PORT = 3000;
server.listen(PORT , () => {
    console.log(`Server Is running at address http://localhost:${PORT}`);
});