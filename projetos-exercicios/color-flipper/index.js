const button = document.querySelector("[data-button]");



const color = () => {

    const conjunto = [];

    for (i=0; i <= 2; i++){
        const numAleatorio = Math.floor(256 * Math.random());
        conjunto[i] = numAleatorio;
    }

    document.body.style.backgroundColor = `rgb(${conjunto})`;
}


button.addEventListener("click", color);