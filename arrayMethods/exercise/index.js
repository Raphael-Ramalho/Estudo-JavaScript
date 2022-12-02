console.log("hey");

const n1 = 4;
const n2 = 5;

const A = [n1, n2];

for (let i = 0; i < A.length; i++) {
  if (A[1] < A[i + 1]) {
    A[1] = 4;
  }
}
