import { valida } from "./validacao.js";

const inputs = document.querySelectorAll("input")
//console.log(inputs)

inputs.forEach(input => {
    input.addEventListener("blur", (evento)=>{
        //console.log(evento.target)
        valida(evento.target)
    })
})

//teste objeto
const teste = {
    teste1: "ola1",
    teste2: "ola2"
}

//console.log(teste[0])



