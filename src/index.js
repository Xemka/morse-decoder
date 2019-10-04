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

    var res = '';
    var letter = '';

    for (var i=0; i<expr.length; i++) {

        if (((i % 10) === 0) && (i !== 0))  {
            res += MORSE_TABLE[letter];
            letter = '';
        }

        if ((expr[i] === '1') && (expr[i+1] === '0')) { 
            letter += '.';
            i++;
            continue;
        }
        
        if ((expr[i] === '1') && (expr[i+1] === '1')) {
            letter += '-';
            i++;
            continue;
        }

        if ((expr[i] === '0') && (expr[i+1] === 0)) {
            i++;
            continue;
        }

        if (expr[i] === '*') {
            i+=10;
            res += ' ';
            continue;
        }

    }
    res += MORSE_TABLE[letter];

    console.log(res);
    return res;
}

module.exports = {
    decode
}