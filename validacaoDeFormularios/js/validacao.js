export function valida(input){
    const tipoDeInput = input.dataset.tipo
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }
    console.log(input.validity)
    if(input.validity.valid){//validity é um objeto referente ao input e valid é uma de suas propriedades que pode conter um valor false em caso de erro e true se for valido.
        input.parentElement.classList.remove("input-container--invalido")//remove a classe especificada
        input.parentElement.querySelector(".input-mensagem-erro").innerHTML = ""
    } else {
        input.parentElement.classList.add("input-container--invalido")//adiciona a classe especificada
        input.parentElement.querySelector(".input-mensagem-erro").innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const mensagemDeErro = {//as propriiedades listadas são referentes aos erros provaveis que os campos podem ter. Os nomes foram obtidos no input.validity
    nome:{//inputs diferentes apresentam erros diferentes
        valueMissing: "O campo nome não pode estar vazio."
    },
    email:{
        valueMissing: "O campo email não pode estar vazio.",
        typeMismatch: "O email digitado não é valido."
    },
    senha:{
        valueMissing: "O campo senha não pode estar vazio.",
        patternMismatch: "A senha deve conter entre 6 e 12 caracteres, ceve conter pelo menos uma letra maiuscula, um número e não deve conter símbolos."
    },
    dataNascimento:{
        valueMissing: "O campo data de nascimento não pode estar vazio.",
        customError: "Você deve ser maior do que 18 anos para se cadastrar."//O html nao possui um erro específico para idade menor de 18 no html, por isso foi utilizado o customError.
    }
}

const validadores = {
    dataNascimento:(input) => validaDataNascimento(input)
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ""
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {//verifica se existe algum erro true dentro do input.validity
            mensagem = mensagemDeErro[tipoDeInput][erro]
        }
    })

    return mensagem
}

function validaDataNascimento(input){
    const dataRecebida = new Date(input.value)//valor vindo do input data que será comparado com a data atual. o js permite comparação entre datas
    let mensagem = ""

    if(!maiorQue18(dataRecebida)){
        mensagem ="Você deve ser maior do que 18 anos para se cadastrar."
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data){
    const dataAtual = new Date()//se nenhum parametro for colocado no Date, ele considerará a data atual
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual  
}