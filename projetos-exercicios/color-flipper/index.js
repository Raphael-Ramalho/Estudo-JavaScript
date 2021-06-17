const button = document.querySelector("[data-button]")
const body = document.querySelector("[data-body]")


let color = () => {

    //let numAleatorio = 256 * Math.random();

    const corRed = Math.floor(256 * Math.random());
    const corGreen = Math.floor(256 * Math.random());
    const corBlue = Math.floor(256 * Math.random());
    console.log(corRed);
    console.log(corGreen);
    console.log(corBlue);

    body.style.background = `rgb(${corRed},${corGreen},${corBlue})`;
}



button.addEventListener("click", color)