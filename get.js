fetch('http://localhost:3000/cadastro')
    .then(resposta => resposta.json())
    .then(dados => {
        
        //Selecionar a tabela tbody
        var tbodyCorpo = document.getElementById('tbody-corpo')

        // Pagar cada objeto do JSON, cria uma linha da tabela
        dados.forEach(objeto => {
            var tr = document.createElement('tr')
            var tdId = document.createElement('td')
            var tdNome = document.createElement('td')
            var tdSobrenome = document.createElement('td')
            var tdTelefone = document.createElement('td')
            var tdRG = document.createElement('td')
            var tdCPF = document.createElement('td')
            var tdIdade = document.createElement('td')
            var tdCurso = document.createElement('td')
            var tdEscola = document.createElement('td')

            // Preenche as células da linha com as informações 
            tdId.innerText = objeto.id
            tdNome.innerText = objeto.nome
            tdSobrenome.innerText = objeto.sobrenome
            tdTelefone.innerText = objeto.telefone
            tdRG.innerText = objeto.RG
            tdCPF.innerText = objeto.CPF
            tdIdade.innerText = objeto.idade
            tdCurso.innerText = objeto.curso
            tdEscola.innerText = objeto.escola

            tr.appendChild(tdId)
            tr.appendChild(tdNome)
            tr.appendChild(tdSobrenome)
            tr.appendChild(tdTelefone)
            tr.appendChild(tdRG)
            tr.appendChild(tdCPF)
            tr.appendChild(tdIdade)
            tr.appendChild(tdCurso)
            tr.appendChild(tdEscola)
            tbodyCorpo.appendChild(tr)
        })
    })