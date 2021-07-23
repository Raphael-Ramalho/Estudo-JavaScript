import { valida } from "./validacao.js";

const inputs = document.querySelectorAll("input")
//console.log(inputs)

inputs.forEach(input => {
    if(input.dataset.tipo === "preco"){
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
    }

    input.addEventListener("blur", (evento)=>{
        console.log(evento.target)
        valida(evento.target)
    })
})





