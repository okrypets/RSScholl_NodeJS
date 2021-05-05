import { pipeline } from 'stream';
import { readStream, writeStream, transformStream} from "./src/streams.js";
import { input, output, shift, action } from "./src/options.js";

pipeline(readStream(input), transformStream(shift, action), writeStream(output), error => {
    if (error) {
      process.stderr.write("ERROR", error);
    } else {
      process.stdout.write('Well done!');
    }
  })
