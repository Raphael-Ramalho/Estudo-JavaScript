console.log("Trabalhando com listas");

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro =`Rio de Janeiro`;

console.log(`destinos possíveis`);
// console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`);

console.log(listaDeDestinos);

listaDeDestinos.splice(2,2);

console.log(listaDeDestinos);
