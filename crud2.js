let contato = []

function addContatos() {
    let name = prompt('Digite o nome: ')
    let number = prompt('Digite o número')
    busca = contato.some((valor) => valor.telefone == number)
    if (busca === true) {
        return alert('Contato ja existente')

    } else {
        let identificador = parseInt(Math.random() * 1000)
        let novoObj = {
            id: identificador,
            nome: name,
            telefone: number
        }



        contato.push(novoObj)
    }




}

function mostarContatos() {
    console.log(contato)
}

function atualizar() {
    nIndentificador = prompt('Digite o id: ')
    let existeId = contato.findIndex((valorId) => valorId.id == nIndentificador)
    if (existeId !== -1) {
        let newNome = prompt('Digite o novo Nome: ')
        let newNumber = prompt('Digite o novo numero:')

        const contatoAtualizado = {
            id: nIndentificador,
            nome: newNome,
            telefone: newNumber
        }

        contato[existeId] = contatoAtualizado

    } else {
        alert('Id não existe por favor digite id correto')
    }


}


function deletar() {
    nIndentificador1 = prompt('Digite o id: ')
    let existeId1 = contato.findIndex((valorId) => valorId.id == nIndentificador1)
    if (existeId1 !== -1) {
        contato.splice(existeId1, 1)



    } else {
        alert('Id não existe por favor digite id correto')
    }


}





<body>
    <button onclick="addContatos()">adicionar</button>
    <button onclick="mostarContatos()"> mostarContatos</button>
    <button onclick="atualizar()">atualizar</button>
    <button onclick="deletar()"> cancelar contato</button>
    <script src="CRUD.js"></script>
</body>
