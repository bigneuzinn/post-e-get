//Função para enviar os dados POST - CREATE
function enviaDados(){

    //Obter os valores dos campos informados pelo usuário 
    var nome = document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    var telefone = document.getElementById('telefone').value
    var RG = document.getElementById('RG').value
    var CPF = document.getElementById('CPF').value
    var idade = document.getElementById('idade').value
    var curso = document.getElementById('curso').value
    var escola = document.getElementById('escola').value

    // Enviar uma função que puxa o valor de uma API - FETCH
    fetch('',{
        // Metodo POST HTTP    
        method: 'POST',
        headers:    {
            //Tipo de conteúdo enviado JSON
            'Content-Type': 'application/json'
        },
        // Dados a serem enviados e convertidos
        body: JSON.stringify ({nome: nome, sobrenome: sobrenome, telefone: telefone, RG: RG, CPF: CPF, idade: idade, curso: curso, escola: escola})
    })
    //Converse a resposta em JSON
    .then(resposta => resposta.JSON)
}