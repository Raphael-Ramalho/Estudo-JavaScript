function fizzBuzz(n) {
    // Write your code here
    for (i = 1; i <= n; i++){
        if (i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz")
        }
    }
}

fizzBuzz(15)