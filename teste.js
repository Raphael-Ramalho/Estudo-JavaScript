
// function findPosition(x){
//     const S = []
//     for (let i = 1; i <= x; i++){
//         for(let j = 1; j <= i; j++){
//             S.push(i)
//         }
//     }
//     for(let k = 0; k <= S.length; k++){
//         if (x == S[k]){
//             return k
//         }
//     }

// }

// console.log(findPosition(5)) //4 posição 6


let s = "(((?)))))"
function missingParentheses(s){
    let esquerda = 0
    let direita = 0 
    for(let i = 0; i < s.length; i++){
        if(s[i] == "("){
            esquerda += 1
        }
        if(s[i] == ")"){
            direita += 1
        }
    }
    res = esquerda - direita
    if(res == 1){
        return ")" 
    } else if (res == -1){
        return "("
    } else if ( res >= 2 || res <= -2){
        return "i"
    } else {
        return "string balanceada"
    }
}

console.log(missingParentheses(s))

//console.log(s[5])




