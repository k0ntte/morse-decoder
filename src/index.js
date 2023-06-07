const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let rez = "";
    let strTwo = "";
    let massMorze = "";
    const masStr = [];
    let k = true;
   for(let i =0;i<expr.length;i = i+10){
    masStr.push(expr.slice(i,i+10));
   }

   for (const iterator of masStr) {
    for(let i = 0; i<iterator.length;i = i+2){
        strTwo += iterator.slice(i,i+2);
        if(strTwo == "10"){
            massMorze += ".";
        }
        if(strTwo == "11"){
            massMorze += "-";
        }
        if(strTwo == "**"){
            rez += " ";
            strTwo = "";
            massMorze = "";
            k = false;
            break;
        }

        strTwo = "";
        k = true;

    }
    if(k){
        rez += MORSE_TABLE[massMorze];
        massMorze = "";
    }
    
   }
   return rez;
}

module.exports = {
    decode
}

    
