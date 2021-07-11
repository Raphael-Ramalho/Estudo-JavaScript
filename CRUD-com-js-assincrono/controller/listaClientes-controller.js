import { clienteService } from "../services/cliente-service.js"

const criaNovaLinha = (nome, email, id) => {
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
    linhaNovoCliente.dataset.id = id
    return linhaNovoCliente
}

const tabela = document.querySelector("[data-tabela]")

tabela.addEventListener("click", (evento)=>{
    let ehbotaoDeletar = evento.target.className === "botao-simples botao-simples--excluir" //identifica o elemento dentro do target que possua a classe especificada. O === é um condicional q vai gerar um True ou um False
    if(ehbotaoDeletar){
        const linhaCliente = evento.target.closest("[data-id]")//essa linha está especificando a tr pai do target. o metodo closest retorna o ancestral mais proximo, em relação ao elemento atual. No caso de o elemento atual possuir o seletor, o mesmo é retornado. Caso não exista um ancestral o metodo retorna null
        let id = linhaCliente.dataset.id
        clienteService.removeCliente(id)
        .then(()=>{
            linhaCliente.remove()//remove o nó linhaCliente
        })
    }
})

//Execução da função listaClientes
clienteService.listaClientes()
.then(data => {
    data.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
    })
})