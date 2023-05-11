function clicouLetra(letra) {
    document.getElementById('visor').value += letra;
}

function clicouCE(){
    document.getElementById('visor').value = ''
}

function criptografia(option) {
    const frase = document.getElementById('visor').value;

    let criptografar;
    if (option === 1) {
        criptografar = cr1(frase);
    } else if (option === 2) {
        criptografar = cr2(frase);
    }

    document.getElementById('visor').value = criptografar;
}

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
            default:
                return letra;
        }
    });
    return cripitografiaLetrasCR.join("");
    // join serve para juntar os caracteres que foram seperados pelo split() 
}

function cr2(frase) {
        const cripitografiaLetrasCR = frase.split("").map(letra => {
        // split = dividi a string em um array de caracteres individuais
        switch (letra.toUpperCase()) {
            case 'A':
                return '/';
            case 'B':
                return '*';
            case 'C':
                return 'CRISTIANO RONALDO';
            case 'D':
                return '+';
            case 'E':
                return 'G';
            case 'F':
                return '.';
            case 'G':
                return '*-*';
            case 'H':
                return ':3';
            case 'I':
                return '65';
            case 'J':
                return ':D';
            case 'K':
                return ':(';
            case 'L':
                return ':)';
            case 'M':
                return 'MESSI';
            case 'N':
                return '123';
            case 'O':
                return '456';
            case 'P':
                return '678';
            case 'Q':
                return '9';
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
                return ' X ';
            case 'Y':
                return 'W';
            case 'Z':
                return 'A';
            default:
                return letra;
        }
    });
    return cripitografiaLetrasCR.join("");
}