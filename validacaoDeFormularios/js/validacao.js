export function valida(input){
    const tipoDeInput = input.dataSet.tipo

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }
}

const validadores = {
    dataNascimento: (input) => validaDataNascimento(input)
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