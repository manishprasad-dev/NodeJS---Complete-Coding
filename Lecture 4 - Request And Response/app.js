const http = require("http");
const fs = require("fs");

const server = http.createServer((req , res) => {

    res.setHeader("Content-Type", "text/html"); //This tells browser:“I am sending HTML content.”, otherwise the browser will treat this as a normal text

        //form
        if(req.url === "/"){
            res.write(`
                <form action="/submit-details" method="POST">
                    <!-- Name Field -->
                    <label for="name">Name:</label><br>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required><br><br>

                    <!-- Email Field -->
                    <label for="email">Email:</label><br>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required><br><br>

                    <!-- Message Field -->
                    <label for="message">Message:</label><br>
                    <textarea id="message" name="message" rows="4" cols="30" placeholder="Write your message here..." required></textarea><br><br>

                    <!-- Submit Button -->
                    <input type="submit" value="Submit">
                </form>`);
            return res.end();
        }else if(req.url === "/submit-details" && req.method == "POST"){
            fs.writeFileSync("user-details.txt" , "Something Which Will Be Only Written If The Method Is POST");
            res.statusCode = 302; 
            // res.setHeader("Location" , "/");
            res.write("Hello Am I Visible");
            res.end();
        }
});

const PORT = 3004;
server.listen(PORT , () => {
    console.log(`Server Is running at address http://localhost:${PORT}`);
});