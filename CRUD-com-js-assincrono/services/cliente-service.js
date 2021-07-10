

//bloco de coneção com API
const listaClientes = () => {
    return fetch("http://localhost:3000/profile")//realiza uma conexão com o servidor que retorna uma resposta. ela faz o GET, buscando os dados no servidor, retorna uma promisse
    //quando a resposta, promisse chega, esse bloco é executado
    .then(resposta =>{
        return resposta.json()//resposta é um texto e precisamos transforma-lo em json
    })
}


