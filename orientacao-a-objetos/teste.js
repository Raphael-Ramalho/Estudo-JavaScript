let valor = 200;
class Usuario{
    cidade;
    teste(){
        this.cidade="São Paulo"
        let teste2 = valor;
        return teste2
    }
}

const pessoa = new Usuario();

pessoa.teste();
console.log(pessoa);
console.log(pessoa.teste());