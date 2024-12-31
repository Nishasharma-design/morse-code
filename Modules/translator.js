import { engToMorse, morseToEng } from "./script.js";

//const input = document.querySelector('#myInput');
//const output = document.querySelector('#myOutput');

const input = document.getElementById("myInput");
const output = document.getElementById("myOutput");


export const translator = (input) => {
    
    if (/^[a-z\s]+$/i.test(input)) {
      output.value = engToMorse(input);
    } else {
      output.value = morseToEng(input);  
    }
};

input.addEventListener('input', () => {
    translator(input.value); 
});  




/*const translator = (input) => {
    const englishRegex = /^[a-z\s]+$/i;
    let result;
    if (englishRegex.test(input)) {
        result = engToMorse(input);
    } else {
        result = morseToEng(input);
    } 
return result;
};

input.addEventListener('input', translator); 

/*document.addEventListener('DOMContentLoaded', () => {
    const inputTextarea = document.querySelector('#myInput');
    const outputTextarea = document.querySelector('#myOutput'); 
    input.addEventListener('input', translator);
});
  
      /*outputTextarea.value = result;*/

    
  