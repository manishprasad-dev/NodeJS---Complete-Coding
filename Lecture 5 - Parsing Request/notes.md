<!-- !What is stream? -->
-> A stream is a way to handle data piece by piece instead of reading it all at once.

Think of it like drinking water with a straw instead of pouring the whole bottle into your mouth.

In Node.js, streams are provided by the built-in
stream module.

There are 4 types of streams:

1. Readable Stream
Used to read data (example: reading a file)
const fs = require('fs');
const readableStream = fs.createReadStream('file.txt');

2. Writable Stream
Used to write data
const writableStream = fs.createWriteStream('output.txt');

3. Duplex Stream
Can read and write (example: TCP socket)

4. Transform Stream
Can modify data while reading/writing (example: compression)

<!-- !What is Chunks? -->
When using streams, data does not come all at once.
Instead, it comes in small pieces called chunks.

Example:
const fs = require('fs');

const stream = fs.createReadStream('bigfile.txt');
stream.on('data', (chunk) => {
    console.log('New chunk received');
    console.log(chunk);
});
Here:
The file is divided into multiple chunks
Each chunk is processed separately
This saves memory
If the file is 1GB, Node.js does NOT load 1GB at once.
It might load something like:

64KB → process
64KB → process
64KB → process
...

Each 64KB piece = chunk

<!-- ! What is Buffer -->
A Buffer is a temporary storage area in memory used to store binary data.

Node.js works heavily with binary data (files, images, network data).

Every chunk you receive from a stream is usually a Buffer object.

Example:

stream.on('data', (chunk) => {
    console.log(Buffer.isBuffer(chunk)); // true
});

Buffer is provided by Node.js global object:

const buffer = Buffer.from('Hello');
console.log(buffer);

Output:

<Buffer 48 65 6c 6c 6f>

That is binary representation.


<!-- ? -------------------------------------------------------------------- -->
🔥 How They Work Together
Let’s connect all three concepts:

Stream → sends data
Data → comes in Chunks
Chunks → stored in Buffer

So:

Stream = data flow system

Chunk = small piece of data

Buffer = memory container for binary chunk

🚀 Why Streams Are Important in Backend

Without streams:

Large file = crash

High memory usage

Slow performance

With streams:

Efficient memory usage

Faster processing

Suitable for file uploads, downloads, APIs

🧠 Real Example: Pipe (Best Practice)
const fs = require('fs');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

Here:

Data flows as stream

Automatically handled in chunks

Each chunk is buffered internally

🎯 Simple Interview Definition

Stream: A way to process data piece by piece instead of loading it entirely.
Chunk: A small piece of data sent through a stream.
Buffer: A temporary memory storage that holds binary data.