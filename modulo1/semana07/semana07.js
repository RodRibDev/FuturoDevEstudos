class Produto {
nome;
preco;
quantidade;

constructor(nome, preco, quantidade){
this.nome = nome
this.preco = preco
this.quantidade = quantidade
}

Vender(quantidadeVenda){
if(quantidadeVenda > this.quantidade){
    console.log("Estoque insuficiente")
    return
}
this.quantidade -= quantidadeVenda
}

Repor(quantidadeRepor){
    this.quantidade += quantidadeRepor
}

MostrarEstoque(){
    console.log(`O produto ${this.nome} tem ${this.quantidade} unidades em estoque`)
}

AtualizarPreco(novoPreco){
    this.preco = novoPreco
}

}

class Pessoa {
    nome;
    idade;
    profissao;

    constructor(nome, idade, profissao){
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
    }
}

class Cliente extends Pessoa{
    telefone;
    email;
    clienteDesde;

    constructor(nome, idade, profissao, telefone, email, clienteDesde){
        super(nome,idade, profissao)
        this.telefone = telefone
        this.email = email
        this.clienteDesde = clienteDesde



    }


}

var caneta = new Produto("Caneta", 2, 10)

console.log(caneta)
caneta.MostrarEstoque()
caneta.AtualizarPreco(4)
console.log(caneta)
caneta.Vender(10)
caneta.MostrarEstoque()
caneta.Vender(1)
caneta.Repor(10)
console.log(caneta)
