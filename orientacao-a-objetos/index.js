import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822244489);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);

const conta1 = new ContaCorrente(cliente1, 102);
const conta2 = new ContaCorrente(cliente2, 103);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(contaCorrenteRicardo);
console.log(conta2);
console.log(ContaCorrente.numeroDeContas);

