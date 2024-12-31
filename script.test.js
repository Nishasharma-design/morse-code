
import * as script from "./Modules/script.js";
import * as morseTranslator from "./Modules/translator.js";

const {
    engToMorse,
    morseToEng
} = script;

const {
    translator
} = morseTranslator;

describe('engToMorse', () => {
    it('Should convert an english string to morse code', () => {
        const input = "APPLE";
        const output = ".- .--. .--. .-.. .";
        expect(engToMorse(input)).toBe(output);
    });

    it('Should handle lowercase input', () => {
        const input = "apple";
        const output = ".- .--. .--. .-.. .";
        expect(engToMorse(input)).toBe(output);
    });

    it('Should add spaces in the expectedOutput', () => {
        const input = "hello world";
        const output = ".... . .-.. .-.. --- / .-- --- .-. .-.. -..";
        expect(engToMorse(input)).toBe(output);
    });

    it('Should return "Invalid input" for non-string input', () => {
        const input = 67890;
        const output = "Invalid input";
        expect(engToMorse(input)).toBe(output);
    });

    it('Should return "Invalid input" for unknown characters', () => {
        const input = "String##$";
        const output = "Invalid input";
        expect(engToMorse(input)).toBe(output);
    });
});

describe('morseToEng', () => {
    it('Should convert morse to english string', () => {
        const input = ".- .--. .--. .-.. .";
        const output = "APPLE";
        expect(morseToEng(input)).toBe(output);
    });

    it('Should convert Morse code with spaces to English', () => {
        const input = ".... . .-.. .-.. --- / .-- --- .-. .-.. -..";
        const output = "HELLO WORLD";
        expect(morseToEng(input)).toBe(output);
    });

    it('Should return "Invalid input" for invalid Morse code', () => {
        const input = ".... $##.- .- .";
        const output = "Invalid input";
        expect(morseToEng(input)).toBe(output);
    });

});

describe("translator", () => {
    it('should translate english to morse code', () => {
        const input = "APPLE";
        const output = ".- .--. .--. .-.. .";
        expect(translator(input)).toBe(output);       
    });
    it('should translate morse code to english', () => {
        const input = ".- .--. .--. .-.. .";
        const output = "APPLE";
        expect(translator(input)).toBe(output); 
    }); 
    it('Should return "Invalid input" for unknown characters', () => {
        const input = "String##$";
        const output = "Invalid input";
        expect(translator(input)).toBe(output);
    }); 
});



