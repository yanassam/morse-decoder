const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let out = '';

    const elementarray = 2; // Количество символов в каждом подмассиве
    const subarray = 5; // Количество подмассивов в группе

    const result = [];

    for (let i = 0; i < expr.length; i += elementarray * subarray) {
        const group = [];

        for (let j = 0; j < subarray; j++) {
            const element = expr.slice(i + j * elementarray, i + (j + 1) * elementarray);
            group.push(element);
        }
        result.push(group);
    }

    // земена в result 10 и 11 на .. и -
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            if (result[i][j] == 10) { result[i][j] = '.' }
            else if (result[i][j] == 11) {
                result[i][j] = '-';
            }
        }
    }
    // массив в строку с пробелом элеиентов, как отдельной буквы
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            out += result[i][j];
        }
        out = out + ' ';
    }
    // удалила все 0
    const str = out.replace(/0/g, '');
    //    массив из каждой подстроки str отдельным элеметном 
    const array = str.split(' ');
    // проверка совапдений из масиива morseCode и перевод в буквы стрка с
    let c = '';

    for (let i = 0; i < array.length; i++) {
        for (let key in MORSE_TABLE) {
            if (array[i] == key) {
                c += MORSE_TABLE[key];
            }
        }
        if (array[i] == '**********') {
            c += ' ';
        }
    }
    return c;
}

module.exports = {
    decode
}