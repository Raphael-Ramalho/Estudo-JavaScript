const criaItem = async (title, subtitle) =>{
    const resposta = await fetch("http://localhost:3000/bancoDeDados",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            title: title,
            subtitle: subtitle 
        })
    })
    if (!resposta.ok){
        throw new Error ("Não foi possível criar o item")
    }
}

const concluidoButton = document.querySelector("[data-concluido-button]")

concluidoButton.addEventListener("click", async()=>{
    const title = document.querySelector("[data-title]").value
    const subtitle = document.querySelector("[data-subtitle]").value
    try{
        await criaItem(title, subtitle)
    }
    catch(error){
        console.log(error)
    }
})