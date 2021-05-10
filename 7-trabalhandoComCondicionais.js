console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 15;
const estaAcompanhada = true;

console.log(`Destinos possíveis`);
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log(`Comprador maior de idade`);
    listaDeDestinos.splice(1, 1);
} else if (estaAcompanhada) {
    console.log(`Comprador está acompanhado`);
    listaDeDestinos.splice(1, 1);
} else {
    console.log(`Comprador não é maior de idade e não posso vender.`);
}


