const deletaTarefa = () =>{
    
}

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement("button");

    botaoDeleta.innerText = "Deletar";
    botaoDeleta.addEventListener("click", deletaTarefa);

    return botaoDeleta;
}

export default BotaoDeleta;