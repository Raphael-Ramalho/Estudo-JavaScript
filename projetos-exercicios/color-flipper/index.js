const button = document.querySelector("[data-button]");
const body = document.querySelector("[data-body]");


let color = () => {

    let conjunto = [];

    for (i=0; i <= 2; i++){
        let numAleatorio = Math.floor(256 * Math.random());
        conjunto[i] = numAleatorio;
    }

    body.style.background = `rgb(${conjunto})`;

}


button.addEventListener("click", color);