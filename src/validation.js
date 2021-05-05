import Fs from 'fs';

const isFileAccess = (file) => Fs.existsSync(file);

const checkIsValid = ({ input, output, shift, action }) => {

    if (!shift) {
        process.stderr.write('ERROR: Shift flag is empty!\n');
        process.exit(1);
      } else if (!Number.isInteger(parseInt(shift))) {
        process.stderr.write('ERROR: Shift flag must be an integer!\n');
        process.exit(1);
      }
      if (!action) {
        process.stderr.write('ERROR: Action flag is empty!\n');
        process.exit(1);
      } else if (action !== "encode" && action !== "decode") {
        process.stderr.write('ERROR: Incorrect action flag. Should be "ancode" or "decode"!\n');
        process.exit(1);
      }
      if(input && !isFileAccess(input)) {
        process.stderr.write(`ERROR: file ${input} does not exist or you don't have access to read it!\n`);
        process.exit(1);
      }
      if(output && !isFileAccess(output)) {
        process.stderr.write(`ERROR: file ${output} does not exist or you don't have access to write it!\n`);
        process.exit(1);
      }
  }
  export { checkIsValid }