import { clienteService } from "../services/cliente-service.js"

const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
    <td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td>
                `//o ?id=${id} é uma querystring, um modelo de manutenção de estado da pagina com a sintaxe ?chave=valor
    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id
    return linhaNovoCliente
}

const tabela = document.querySelector("[data-tabela]")

tabela.addEventListener("click", async (evento)=>{ //async e await servem para substituir o .then, tornando o código mais legivel
    let ehbotaoDeletar = evento.target.className === "botao-simples botao-simples--excluir" //identifica o elemento dentro do target que possua a classe especificada. O === é um condicional q vai gerar um True ou um False
    if(ehbotaoDeletar){
        try{
            const linhaCliente = evento.target.closest("[data-id]")//essa linha está especificando a tr pai do target. o metodo closest retorna o ancestral mais proximo, em relação ao elemento atual. No caso de o elemento atual possuir o seletor, o mesmo é retornado. Caso não exista um ancestral o metodo retorna null
            let id = linhaCliente.dataset.id
            await clienteService.removeCliente(id)
            linhaCliente.remove()//remove o nó linhaCliente
        }
        catch(erro){
            console.log(erro)
            window.location.href = "../telas/erro.html"//usuário será redirecionado para essa pagina se a tentativa do bloco "try" não for executada
        }
    }
})

const render = async () => {//quando uma função assíncrona (async) é chamada, ela retorna uma promisse. uma função assincrona pode conter uma expressão await, que pausa a execuçãoda função assincrona e espera pela resolução da promisse passada, e depois retoma a execução da função assíncrona e retorna o valor resolvido
    try{
        const listaClientes = await clienteService.listaClientes()
        listaClientes.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
        })
    }
    catch(erro){
        console.log(erro)
        window.location.href = "../telas/erro.html"
    }
}   

render()

