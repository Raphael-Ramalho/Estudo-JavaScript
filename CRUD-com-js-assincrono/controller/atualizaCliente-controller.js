import { clienteService } from "../services/cliente-service.js"

const pegaURL = new URL(window.location) // essa linha armazena na variavel pegaURL um objeto URL contendo o href, o endereço, da pagina atual

const id = pegaURL.searchParams.get("id") //essa linha está buscando o valor da chave "id" presente no href da URL  

const inputNome = document.querySelector("[data-nome]")
const inputEmail = document.querySelector("[data-email]")

clienteService.detalhaCliente(id)
.then(dados => {
    inputNome.value = dados.nome 
    inputEmail.value = dados.email
})