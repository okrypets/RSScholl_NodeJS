import { Command } from 'commander/esm.mjs';
const program = new Command();

program
  .option('-s, --shift <number/integer>', 'a shift')
  .option('-i, --input <inputFilePath>', 'an input file')
  .option('-o, --output <outputFilePath>', 'an output file')
  .option('-a, --action <actionName>', 'an action encode/decode')
  .parse(process.argv);

const { shift, input, output, action} = program.opts();

export { shift, input, output, action }