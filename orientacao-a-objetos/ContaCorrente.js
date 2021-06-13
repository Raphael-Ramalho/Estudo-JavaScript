import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas++; 
    }

    teste(){
        super.teste();
        console.log("teste na classe conta corrente")
    }
}

