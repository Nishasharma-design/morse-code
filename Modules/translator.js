

const inputTextarea = document.querySelector('#myInput');
const outputTextarea = document.querySelector('#myOutput');

const morse_code_dict = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..',
    'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
  'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
  'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---',
  '3': '...--', '4': '....-', '5': '.....', '6': '-....',
  '7': '--...', '8': '---..', '9': '----.', '0': '-----',
  ' ': '/'};

const engToMorse = (input) => {
    if (typeof input !== "string" || !/^[a-z\s]+$/i.test(input)) {
        return "Invalid input";
    }
   return input.toUpperCase().split('').map(char => morse_code_dict[char] || '').join(' ');

};

const reverseMorse = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z',
    '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', '-----': '0',
  };


const morseToEng = (morseCode) => {
    if (!/^[.\-\/\s]*$/.test(morseCode)) {
        return "Invalid input";
    } else {
    return morseCode.split(" / ").map((word) => word.split(" ").map((letter) => reverseMorse[letter] || "").join("")).join(" ");
};
};

export const translator = (inputTextarea) => {
    const input = inputTextarea.value;
    const englishRegex = /^[a-z\s]+$/i;
    let output;
    if (englishRegex.test(input)) {
        output = engToMorse(input);
    } else {
        output = morseToEng(input);
    } 
return output;
};

document.addEventListener('DOMContentLoaded', () => {
    const inputTextarea = document.querySelector('#myInput');
    const outputTextarea = document.querySelector('#myOutput');
  
    inputTextarea.addEventListener('input', () => {
      const result = translator(inputTextarea);  
      outputTextarea.value = result;
    });
  });