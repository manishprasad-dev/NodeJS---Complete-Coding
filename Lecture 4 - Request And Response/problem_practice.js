const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader("Content-Type", "text/html");

    if (req.url === "/home") {
        //! Different Line Of Code For Home Section
        res.write("<h1>Welcome To Home Page</h1>");
    } else if (req.url === "/men") {
        //! Different Line Of Code For Men Section
        res.write("<h1>Welcome To Men Section</h1>");
    } else if (req.url === "/women") {
        //! Different Line Of Code For Women Section
        res.write("<h1>Welcome To Women Section</h1>");
    } else if (req.url === "/kids") {
        //! Different Line Of Code For Kids Section
        res.write("<h1>Welcome To Kids Section</h1>");
    } else if (req.url === "/cart") {
        //! Different Line Of Code For Cart Section
        res.write("<h1>Welcome To Cart</h1>");
    }
    res.write(`
            <html lang="en">
            <head>
            <title>Myntra</title>
            </head>
            <body>
            <head>
                <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/men">Men</a></li>
                    <li><a href="/women">Women</a></li>
                    <li><a href="/kids">Kids</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
                </nav>
            </head>
            </body>
            </html>
  `);
})

const PORT = 3003;

server.listen(PORT, () => {
    console.log(`Server is live at address http://localhost:${PORT}`);
})

/*
Problem 
    Create a page that shows a navigation bar of myntra with the following links:
        A. Home
        B. Men
        C. Women
        D. Kids
        E. Cart
    Clicking on each link page should navigate to that page and a welcome to section text is shown over there.
*/