import { Transform } from "stream"
import { createReadStream, createWriteStream } from 'fs';
import { crypto } from "./crypto.js";

const  readStream = (inputPath) => {
    if (!inputPath) return process.stdin
    return createReadStream('input.txt')
};

const writeStream = (outputPath) => { 
    if (!outputPath) return process.stdout
    return createWriteStream('output.txt')
};
const transformStream = (shift, action) => {

return new Transform({objectMode: true, transform(chunk, _, callback) {
    this.push(crypto(chunk.toString(), shift, action))
    callback();
}})
};

export {
    readStream, writeStream, transformStream
}