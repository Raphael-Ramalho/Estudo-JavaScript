

//bloco de coneção com API
const listaClientes = () => {
    return fetch("http://localhost:3000/profile")//realiza uma conexão com o servidor que retorna uma resposta. ela faz o GET, buscando os dados no servidor, retorna uma promisse
    //quando a resposta, promisse chega, esse bloco é executado
    .then(resposta =>{
        return resposta.json()//resposta é um texto e precisamos transforma-lo em json
    })
}

const criaCliente = () => {
    return fetch("http://localhost:3000/profile",{
        method:"POST", //adiconando esse metodo, o comportamento padrão GET é substituido pelo POST, permitindo o armazenamento de determinado dado no servidor
        headers:{//assim como no html, o head é a parte de confinuração, enquanto que o conteudo se localiza no body
            "Content-Type":"aplication/json"
        },
        body: JSON.stringify({// os dados armazenados no servidor precisar ser transformados em string
            nome, email
        })
    })
}

export const clienteService = {
    listaClientes
}
