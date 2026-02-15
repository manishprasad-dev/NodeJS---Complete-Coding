const http = require("http");
const fs = require("fs");

const server = http.createServer((req , res) => {
    res.setHeader("Content-Type", "text/html");
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
            // ! This time we will print the dynamic value entered by the user on the respective field
            const body = [];
            req.on('data', chunk=>{
                console.log(chunk); // console log the chunk un buffer format
                body.push(chunk);
            });

            req.on('end' , () =>{
                const parsedData = Buffer.concat(body).toString();
                // concat = concatenation
                console.log(parsedData);
            });

            fs.writeFileSync("user-details.txt" , "Something Which Will Be Only Written If The Method Is POST");
            res.statusCode = 302; 
            // res.setHeader("Location" , "/");
            res.write("Hello Am I Visible");
            res.end();
        }
});

const PORT = 3005;
server.listen(PORT , () => {
    console.log(`Server Is running at address http://localhost:${PORT}`);
});