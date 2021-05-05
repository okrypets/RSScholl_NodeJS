import { Transform } from "stream"
import { createReadStream, createWriteStream } from 'fs';

const  readStream = (inputPath) => {
    if (!inputPath) return process.stdin
    return createReadStream('input.txt')
};

const writeStream = (outputPath) => { 
    if (!outputPath) return process.stdout
    return createWriteStream('output.txt')
};
const transformStream = () => {
return new Transform({objectMode: true, transform(chunk, _, callback) {
    this.push(chunk.toString())
    callback();
}})
};

export {
    readStream, writeStream, transformStream
}