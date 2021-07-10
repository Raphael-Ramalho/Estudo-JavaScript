

//bloco de coneção com API
const listaClientes = () => {
    return fetch("http://localhost:3000/profile")//realiza uma conexão com o servidor que retorna uma resposta. ela faz o GET, buscando os dados no servidor, retorna uma promisse
    //quando a resposta, promisse chega, esse bloco é executado
    .then(resposta =>{
        return resposta.json()//resposta é um texto e precisamos transforma-lo em json
    })
}

const criaCliente = (nome, email) => {
    return fetch("http://localhost:3000/profile",{
        method:"POST", //adiconando esse metodo, o comportamento padrão GET é substituido pelo POST, permitindo o armazenamento de determinado dado no servidor
        headers:{//assim como no html, o head é a parte de confinuração, enquanto que o conteudo se localiza no body
            "Content-Type":"application/json"
        },
        body: JSON.stringify({// os dados armazenados no servidor precisar ser transformados em string
            nome: nome, 
            email: email
        })
    })
    .then(resposta => {
        return resposta.body
    })
}

export const clienteService = {
    //criar esse objeto é uma forma de não precisar exportar multiplas variaveis/funções. basta exportar o objeto, chamando suas propriedades nos demais arquivos. EX: listaCliente -> clienteService.listaCliente
    listaClientes,
    criaCliente
}
