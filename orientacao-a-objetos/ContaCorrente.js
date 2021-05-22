export class ContaCorrente{
    agencia;
    saldo;
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo = this.saldo - valor;
            return valor;
        }
    };
    depositar(valor){
        if(valor < 0){
            return;
        }
        this.saldo = this.saldo + valor;
    }
}