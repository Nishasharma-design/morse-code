

const input = document.getElementById("myInput");
const output = document.getElementById("myOutput");

//writing a function to convert english to morse

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

export const engToMorse = (input) => {
     if (typeof input !== "string" || !/^[a-z\s]+$/i.test(input)) {
        return "Invalid input";
     }
    return input.toUpperCase().split('').map(char => morse_code_dict[char] || '').join(' ');

};

//writing a function to convert morse to english

const reverseMorse = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z',
    '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', '-----': '0',
  };

export const morseToEng = (morseCode) => {
    if (!/^[.\-\/\s]*$/.test(morseCode)) {
        return "Invalid input";
    } else {
    return morseCode.split(" / ").map((word) => word.split(" ").map((letter) => reverseMorse[letter] || "").join("")).join(" ");
}
};
