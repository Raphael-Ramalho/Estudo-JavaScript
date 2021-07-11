

//bloco de coneção com API
const listaClientes = async () => {
    const resposta = await fetch("http://localhost:3000/profile") //realiza uma conexão com o servidor que retorna uma resposta. ela faz o GET, buscando os dados no servidor, retorna uma promisse. o nome "profile" do domínio é referente ao nome presente no arquivo db.json. o nome do arquivo em si n parede ser relevante para o comportamento da aplicação, assim como o arquivo package-lock.json
        
    if (resposta.ok) { //bloco acessado se a resposta do servidor tiver o código ok (código 200)
        return resposta.json() //resposta é um texto e precisamos transforma-lo em json
    }
    throw new Error("Não foi possível listar os clientes") //linha acessada se a resposta do servidor não for ok. Nesse caso, o errodescrito nessa linha será escrito no console.log
}


const criaCliente = async (nome, email) => {
    const resposta = await fetch("http://localhost:3000/profile",{
        method:"POST", //adiconando esse metodo, o comportamento padrão GET é substituido pelo POST, permitindo o armazenamento de determinado dado no servidor
        headers:{//assim como no html, o head é a parte de confinuração, enquanto que o conteudo se localiza no body
            "Content-Type":"application/json"
        },
        body: JSON.stringify({// os dados armazenados no servidor precisar ser transformados em string
            nome: nome, 
            email: email
        })
    })
    if (resposta.ok){
        return resposta.body
    }
    throw new Error ("Não foi possível criar um cliente")
}


const removeCliente = async (id) => { // a remoção dos itens do banco de dados db.json está sendo feita pelo id armazenado
    const resposta = await fetch(`http://localhost:3000/profile/${id}`,{ // esse é o caminho até o item a ser removido
    method: "DELETE"
    })
    if(!resposta.ok){
        throw new Error ("Não foi possível remover um cliente")
    }
}

const detalhaCliente = async (id) =>{
    const resposta = await fetch(`http://localhost:3000/profile/${id}`)
    if(resposta.ok){
        return resposta.json()
    }
    throw new Error ("Não foi possível detalhar o cliente")  
}

const atualizaCliente = async (id, nome, email) => {
    const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
        method: "PUT", 
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome, 
            email: email
        })
    })
//o .then é uma forma de trabalhar com a resposta emitida pelo servidor
    if(resposta.ok){
        return resposta.json()// está transformando a resposta em um objeto JSON
    }
    throw new Error ("Não foi possível atualizar o cliente")

}

export const clienteService = {
    //criar esse objeto é uma forma de não precisar exportar multiplas variaveis/funções. basta exportar o objeto, chamando suas propriedades nos demais arquivos. EX: listaCliente -> clienteService.listaCliente
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}
