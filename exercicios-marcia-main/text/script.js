// Função para adicionar caracteres ao campo de texto
function addChar(char) {
    document.getElementById("inputText").value += char;
}

// Função para criptografar a frase
function encrypt(option) {
    const frase = document.getElementById("inputText").value;

    // Realiza a criptografia de acordo com a opção selecionada
    let criptografia;
    if (option === 1) {
        criptografia = encryptMethod1(frase);
    } else if (option === 2) {
        criptografia = encryptMethod2(frase);
    }

    document.getElementById("inputText").value = criptografia;
}

// Método de criptografia 1
function encryptMethod1(frase) {
    // Lógica de criptografia do método 1
    // Substitui cada letra por outra letra específica
    // Implemente sua própria lógica de criptografia aqui
    const encryptedChars = frase.split("").map(char => {
        switch (char.toUpperCase()) {
            case "A":
                return "Q";
            case "B":
                return "W";
            case "C":
                return "E";
            // Adicione mais casos para as outras letras
            default:
                return char;
        }
    });

    return encryptedChars.join("");
}

// Método de criptografia 2
function encryptMethod2(frase) {
    // Lógica de criptografia do método 2
    // Substitui cada letra por outra letra específica
    // Implemente sua própria lógica de criptografia aqui
    const encryptedChars = frase.split("").map(char => {
        switch (char.toUpperCase()) {
            case "A":
                return "Z";
            case "B":
                return "Y";
            case "C":
                return "X";
            // Adicione mais casos para as outras letras
            default:
                return char;
        }
    });

    return encryptedChars.join("");
}