export const crypto = (text, shift, action) => {
if (action !== 'encode') shift *= -1;
return text.split("").map(symbol => {
   if (symbol === '\r' ||  symbol === '\n') return symbol
    const charCode = symbol.charCodeAt(0);    
    if (charCode >= 65 && charCode <=  90) {
      return String.fromCharCode((charCode - 65 + +shift) % 26 + 65);
     } else if (charCode >= 97 && charCode <= 122) {
        let charCodeValue = String.fromCharCode((charCode - 97 + +shift) % 26 + 97);
        if (charCodeValue < 97) {
            charCodeValue += 26
        }
      return charCodeValue;
     } else {
        return symbol;
     }
    }).join('');
}
