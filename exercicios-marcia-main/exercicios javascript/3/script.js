var num1 = parseInt(prompt("Digite o primeiro número:"));
var num2 = parseInt(prompt("Digite o segundo número:"));

var soma = num1 + num2;
var subtracao1 = num1 - num2;
var subtracao2 = num2 - num1;
var produto = num1 * num2;
var divisao = num1 / num2;
var quociente = parseInt(num1 / num2);
var resto = num1 % num2;

document.write("Soma: " + soma + '<br>');
document.write("Subtração1: " + subtracao1 + '<br>');
document.write("Subtração2: " + subtracao2 + '<br>');
document.write("Produto: " + produto + '<br>');
document.write("Divisão do primeiro pelo segundo: " + divisao + '<br>');
document.write("Quociente: " + quociente + '<br>');
document.write("Resto da divisão do primeiro pelo segundo: " + resto);
