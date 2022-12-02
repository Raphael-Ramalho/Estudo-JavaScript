// ARRAY DE NUMEROS DECRESCENTES

const contarDecrescente = (n) => {
  let resultado = [];

  if (n < 1) {
    return;
  }

  return [...resultado, contarDecrescente(n - 1)];
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
