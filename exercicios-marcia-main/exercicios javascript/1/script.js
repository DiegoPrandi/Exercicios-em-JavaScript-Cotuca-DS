var nome = prompt('Digite o seu nome:');
var idade = prompt('Digite sua idade:');

if(idade >= 18){
    var msg = 'Parabéns ' + nome + ', você é maior de idade.';
}
else{
    var msg = 'Opa ' + nome + ', você não é maior de idade.';
}

alert(msg);
document.write(msg);