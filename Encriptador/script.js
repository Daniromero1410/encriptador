function caesarCipher(text, shift, decrypt = false) {
    return text.replace(/[a-z]/gi, letter => {
        const code = letter.charCodeAt(0);
        const isUpperCase = letter === letter.toUpperCase();
        const alphabet = isUpperCase ? 65 : 97;
        
        if (decrypt) {
            shift = (26 - shift) % 26;
        }
        
        return String.fromCharCode((code - alphabet + shift) % 26 + alphabet);
    });
}

function encrypt() {
    const input = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const output = caesarCipher(input, shift);
    document.getElementById('outputText').value = output;
}

function decrypt() {
    const input = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const output = caesarCipher(input, shift, true);
    document.getElementById('outputText').value = output;
}