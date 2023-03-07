const fs = require('fs');

// create a readable stream to read data from file
const readableStream = fs.createReadStream('input.txt');

// create a writable stream to write data to a file
const writableStream = fs.createWriteStream('output.txt');

// listen for the 'data' event on the readable stream
readableStream.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);

    // write the data to the writable stream
    writableStream.write(chunk);
});

// listen for the 'end' event on the readable stream
readableStream.on('end', () => {
    console.log('Finished reading data from file.');

    // end the writable stream to close the file
    writableStream.end();
});

// listen for the 'finish' event on the writable stream
writableStream.on('finish', () => {
    console.log('Finished writing data to file.');
});
