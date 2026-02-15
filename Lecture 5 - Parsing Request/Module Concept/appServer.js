const http = require("http");

const requestHandler = require("./userhtml");

const server = http.createServer(requestHandler);



const PORT = 3005;
server.listen(PORT , () => {
    console.log(`Server Is running at address http://localhost:${PORT}`);
});