const fs = require("fs");

const userRequestHandler = ((req , res) => {
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


            // Form data does NOT come at once.
            // It comes as streamed chunks (Buffer format).
            const body = [];
            req.on('data', chunk=>{
                console.log(chunk); // console log the chunk un buffer format
                body.push(chunk);
            });

            // This runs after ALL chunks are received. this whole is aysnchoronous
            req.on('end' , () =>{
                const fullBody = Buffer.concat(body).toString(); //combining buffer and converting them into string
                console.log(`Printing Raw : ${fullBody}`);

                
                const params = new URLSearchParams(fullBody); //Converting String to Object
                //This is called URL encoded form data.
                console.log(`Printing Params : ${params}`);
                console.log(`Printing Params Entries : ${params.entries()}`);
                const bodyObject = {};
                for(const [key , value] of params.entries()){
                    bodyObject[key] = value;
                }

                console.log(bodyObject);

                const jsonString = JSON.stringify(bodyObject);
                console.log(`Printing JsonString : ${jsonString}`);
                fs.writeFileSync("user-details" , jsonString);
            });

            // fs.writeFileSync("user-details.txt" , "Something Which Will Be Only Written If The Method Is POST");
            res.statusCode = 302; 
            // res.setHeader("Location" , "/");
            res.write("Hello Am I Visible");
            res.end();
        }
});

module.exports = userRequestHandler;