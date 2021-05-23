let valor = 200;
class Usuario{
    cidade = "Niteroi";
    teste(x,civil){
        civil.cidade="São Paulo";
        x = 20;
        return x
    }
}

const civil1 = new Usuario();
const civil2 = new Usuario();

const teste2 = civil1.teste(valor,civil2);
console.log(civil1);
console.log(civil2);
console.log(valor);
console.log(teste2);
