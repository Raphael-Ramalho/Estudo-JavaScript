// ARRAY DE NUMEROS DECRESCENTES

// contarDecrescente(4) -> [4,3,2,1]
const contarDecrescente = (n, resultado = [n]) => {
  
  if (n <= 1) {
    return resultado;
  }

  const resp = [...resultado, n - 1];

  return contarDecrescente(n - 1, resp);
};

console.log("arrayDecrescente:", contarDecrescente(4));

// CALCULAR FATORIAL

const fatorial = (n) => {
  if (n < 1) return 1;
  const resposta = n - 1;
  return n * fatorial(resposta);
};

//console.log("fatorial:", fatorial(4));

// 4! = 4*3*2*1 = 24
