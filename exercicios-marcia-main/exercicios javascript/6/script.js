function adivinharNumero() {
    var numAleatorio = Math.floor(Math.random() * 9 + 1); // Gera um número aleatório entre 1 e 9
    var chances = 3;

    while (chances > 0) {
        var palpite = parseInt(prompt("Adivinhe o número entre 1 e 9)"));

        if (palpite < 1 || palpite > 9 || palpite == '') {
        alert("Digite um numero entre 1 e 9");
        continue;
        }

        if (palpite === numAleatorio) {
        alert("Parabéns! você acertou o número era" + numAleatorio);
        return;
        } else if (palpite < numAleatorio) {
        alert("O número é maior.");
        } else {
        alert("O número é menor.");
        }

        chances--;
    }

    alert(
        "Suas chances acabaram, o número era: " + numAleatorio 
    );
}

