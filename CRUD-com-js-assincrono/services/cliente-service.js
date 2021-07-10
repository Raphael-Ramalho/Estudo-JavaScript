const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
    <td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td>
                `
    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}

const tabela = document.querySelector("[data-tabela]")

//bloco de coneção com API
const listaClientes = () => {
    return fetch("http://localhost:3000/profile")//realiza uma conexão com o servidor que retorna uma resposta. ela faz o GET, buscando os dados no servidor, retorna uma promisse
    //quando a resposta, promisse chega, esse bloco é executado
    .then(resposta =>{
        return resposta.json()//resposta é um texto e precisamos transforma-lo em json
    })
}

//Execução da função listaClientes
listaClientes()
.then(data => {
    data.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
    })
})
