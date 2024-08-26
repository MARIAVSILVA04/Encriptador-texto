function encryptText() {
    let inputText = document.getElementById("inputText").value;
    let shift = parseInt(document.getElementById("shift").value);
    let encryptedText = caesarCipher(inputText, shift);
    document.getElementById("outputText").value = encryptedText;
    togglePlaceholder(false);
}

function decryptText() {
    let inputText = document.getElementById("inputText").value;
    let shift = parseInt(document.getElementById("shift").value);
    let decryptedText = caesarCipher(inputText, -shift);
    document.getElementById("outputText").value = decryptedText;
    togglePlaceholder(false);
}

function caesarCipher(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            // Letras mayúsculas
            result += String.fromCharCode(((charCode - 65 + shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Letras minúsculas
            result += String.fromCharCode(((charCode - 97 + shift + 26) % 26) + 97);
        } else {
            // Caracteres no alfabéticos
            result += text[i];
        }
    }
    return result;
}

function togglePlaceholder(show) {
    const placeholder = document.querySelector(".placeholder");
    placeholder.style.display = show ? "block" : "none";
}

// Inicializar con la imagen visible
togglePlaceholder(true);
