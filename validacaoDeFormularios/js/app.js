import { valida } from "./validacao.js";

const inputs = document.querySelectorAll("input")
console.log(inputs)

inputs.forEach(input =>{
    input.addEventListener("blur", (evento)=>{
        valida(evento.target)
    })
})


