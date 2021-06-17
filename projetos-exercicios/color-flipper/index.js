const button = document.querySelector("[data-button]");



let color = () => {

    let conjunto = [];

    for (i=0; i <= 2; i++){
        let numAleatorio = Math.floor(256 * Math.random());
        conjunto[i] = numAleatorio;
    }

    document.body.style.backgroundColor = `rgb(${conjunto})`;

}


button.addEventListener("click", color);