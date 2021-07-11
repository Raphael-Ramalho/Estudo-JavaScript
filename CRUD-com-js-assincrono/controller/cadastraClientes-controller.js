import { clienteService } from "../services/cliente-service.js"

const formulario = document.querySelector("[data-form]")


formulario.addEventListener("submit", async(evento)=>{
    evento.preventDefault()
    const nome = evento.target.querySelector("[data-nome]").value
    const email = evento.target.querySelector("[data-email]").value
    try{
        await clienteService.criaCliente(nome, email)
        //esse bloco vai redirecionar o usuário para uma outra pagina após receber a resposta do servior
        window.location.href = '../telas/cadastro_concluido.html' //window - tela inteira, location - onde vc está, href - para onde vai enviar
    }
    catch(error){
        console.log(erro)
        window.location.href = "../telas/erro.html"
    }
})