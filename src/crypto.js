export const crypto = (text, shift, action) => {
if (action !== 'encode') shift *= -1;
return text.split("").map(symbol => {
   if (symbol === '\r' ||  symbol === '\n') return symbol
    const charCode = symbol.charCodeAt(0);
    if (charCode >= 65 && charCode <=  90) {
      const codedCharCode = (charCode - 65 + +shift) % 26 + 65;
      let stringValue = String.fromCharCode(codedCharCode);
      if (codedCharCode < 65 ) {
         stringValue = String.fromCharCode(codedCharCode + 26)
      }
      return stringValue;
     } else if (charCode >= 97 && charCode <= 122) {
        const codedCharCode = (charCode - 97 + +shift) % 26 + 97
        let stringValue = String.fromCharCode(codedCharCode);
        if (codedCharCode < 97) {
         stringValue = String.fromCharCode(codedCharCode + 26)
        }
      return stringValue;
     } else {
        return symbol;
     }
    }).join('');
}
