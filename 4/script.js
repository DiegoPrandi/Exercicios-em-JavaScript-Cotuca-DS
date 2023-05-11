function validacao(){
    var ra = document.getElementById('ra').value
    var nome = document.getElementById('nome').value
    var idade = document.getElementById('idade').value
    var email = document.getElementById('email').value

    if (ra == '' || nome == '' || idade == '' || email == ''){
        alert('Preencha os campos corretamente.')
    }

    // --> length = Conta os números de caracteres dentro da variavel 
    if (nome.length > 40) {
        alert('O campo nome só pode ter no máximo 40 caracteres.')
    }

    if (idade.length > 3){
        alert('O campo idade só pode ter no máximo 3 caracteres.')
    }

    if (!/\S+@\S+\.\S+\.\S+/.test(email)){
        alert('Formato de email incorreto, por favor digite certo.')
    }
    else{
        document.write('Tudo certo')
    }
}