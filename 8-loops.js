console.log(`Trabalhando com loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemDisponivel = false;
const destino = "Rio de Janeiro";

console.log(`\n Destinos possíveis:`);
console.log(listaDeDestinos);
console.log(`Destino escolhido: ${destino}`)

if (idadeComprador >= 18 || estaAcompanhada) {
    for(i=0; i<listaDeDestinos.length; i++){
        if(destino == listaDeDestinos[i]){
            temPassagemDisponivel =true;
            listaDeDestinos.splice(i, 1);
            console.log(`Boa viagem!`);
        }
    }
    if(!temPassagemDisponivel){
        console.log("Passagens esgotadas para essa cidade");
    }
    

} else {
    console.log(`Comprador não é maior de idade e não posso vender.`);
    temPassagemDisponivel =false;
}

console.log(listaDeDestinos);

// console.log("Embarque: \n")
// if(idadeComprador >=18 && temPassagemDisponivel){
//     console.log(`Boa viagem`);
// } else {
//     console.log(`Você não pode embarcar`);
// }