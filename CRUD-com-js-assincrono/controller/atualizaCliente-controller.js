import { clienteService } from "../services/cliente-service.js"

//função auto executável.
(async() => { 
    const pegaURL = new URL(window.location) // essa linha armazena na variavel pegaURL um objeto URL contendo o href, o endereço, da pagina atual

    const id = pegaURL.searchParams.get("id") //essa linha está buscando o valor da chave "id" presente no href da URL  
    
    const inputNome = document.querySelector("[data-nome]")
    const inputEmail = document.querySelector("[data-email]")
    try{
        const dados = await clienteService.detalhaCliente(id)
        //o .then(dados) => { dessa linha foi removido. o await da linha de cima está compensando essa mudança
        inputNome.value = dados.nome 
        inputEmail.value = dados.email
    }
    catch(erro){
        console.log(erro)
        window.location.href = "../telas/erro.html"
    }
    const formulario = document.querySelector("[data-form]")
    
    formulario.addEventListener("submit", async (evento) => {
        evento.preventDefault()
        try{
            await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
            window.location.href = '../telas/cadastro_concluido.html'// redirecionado para essa pagina após receber uma resposta do servidor
        }
        catch(erro){
            console.log(erro)
            window.location.href = "../telas/erro.html"
        }
    })
})

