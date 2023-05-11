// Função para adicionar caracteres ao campo de texto
function addChar(letra) {
    document.getElementById("visor").value += letra;
}

// cripitografia
function criptografia(option) {
    const frase = document.getElementById("visor").value;

    let criptografar;
    if (option === 1) {
        criptografar = cr1(frase);
    } else if (option === 2) {
        criptografar = cr2(frase);
    }

    document.getElementById("visor").value = criptografar;
}

// cr1
function cr1(frase) {
    const cripitografiaLetrasCR = frase.split("").map(letra => {
        // split = dividi a string em um array de caracteres individuais
        switch (letra.toUpperCase()) {
            case 'A':
                return 'Y';
            case 'B':
                return 'W';
            case 'C':
                return 'E';
            case 'D':
                return 'A';
            case 'E':
                return 'G';
            case 'F':
                return 'B';
            case 'G':
                return 'K';
            case 'H':
                return 'D';
            case 'I':
                return 'T';
            case 'J':
                return 'Q';
            case 'K':
                return 'G';
            case 'L':
                return 'Q';
            case 'M':
                return 'P';
            case 'N':
                return 'Z';
            case 'O':
                return 'W';
            case 'P':
                return 'M';
            case 'Q':
                return 'N';
            case 'R':
                return 'Ç';
            case 'S':
                return 'Y';
            case 'T':
                return '/';
            case 'U':
                return '*';
            case 'V':
                return '~';
            case 'W':
                return '64';
            case 'X':
                return '7';
            case 'Y':
                return 'W';
            case 'Z':
                return 'A';
            // Adicione mais casos para as outras letras
            default:
                return letra;
        }
    });

    return cripitografiaLetrasCR.join("");
}

// cr2
function cr2(frase) {
    const cripitografiaLetrasCR = frase.split("").map(letra => {
        switch (letra.toUpperCase()) {
            case "A":
                return "Z";
            case "B":
                return "Y";
            case "C":
                return "X";
            default:
                return letra;
        }
    });
    // join serve para juntar os caracteres 
    return cripitografiaLetrasCR.join("");
}