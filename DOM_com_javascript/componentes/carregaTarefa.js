import { criaData } from "./criaData.js"
import { ordenaDatas, removeDataRepetidas } from "./data.js"

export const carregaTarefa = () =>{
    const lista = document.querySelector("[data-list]")

    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")) || []

    lista.innerHTML = " "
    const datasUnicas = removeDataRepetidas(tarefasCadastradas)
    ordenaDatas(datasUnicas)
    datasUnicas.forEach((dia) => { 
        lista.appendChild(criaData(dia))
    })
}

