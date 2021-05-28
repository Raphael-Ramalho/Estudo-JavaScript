const BotaoDeleta = () => {
    const botaoDeleta = document.createElement("button");

    botaoDeleta.innerText = "Deletar";
    botaoDeleta.addEventListener("click", deletaTarefa);

    return botaoDeleta;
}

const deletaTarefa = (evento) =>{
    const botaoDeleta = evento.target;
    
    const tarefaCompleta = botaoDeleta.parentElement;

    tarefaCompleta.remove();
}

export default BotaoDeleta;