const decreaseButton = document.querySelector("[data-decrease]")
const resetButton = document.querySelector("[data-reset]")
const increaseButton = document.querySelector("[data-increase]")
const resultDisplay = document.querySelector("[data-result]")

let resultNumber = 0;
console.log(resultNumber);



const decreaseFunction = () => {
    resultNumber -= 1;
    printFunction(resultNumber);
    backgroundColor(resultNumber);
}

const increaseFunction = () => {
    resultNumber += 1;
    printFunction(resultNumber);
    backgroundColor(resultNumber);
}

const resetFunction = () => {
    resultNumber = 0;
    printFunction(resultNumber);
    backgroundColor(resultNumber);
}

function printFunction(number) {
    resultDisplay.innerText = number;
}

function backgroundColor(number){
    if (number == 0) {
        resultDisplay.style.color = "black";
    } else if (number < 0) {
        resultDisplay.style.color = "red";
    } else {
        resultDisplay.style.color = "rgb(0, 120, 0)";
    }
}



decreaseButton.addEventListener("click", decreaseFunction);
increaseButton.addEventListener("click", increaseFunction);
resetButton.addEventListener("click", resetFunction);