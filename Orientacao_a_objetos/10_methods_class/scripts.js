class Pessoa 
{
    constructor(nome,idade)
    {
        this.nome = nome;
        this.idade = idade;
    }
    trabalhar()
    {
        console.log("Trabalhar Vagabundo");
    }
}
Pessoa.prototype.funcao = "Programador";//Esse prototype está deixando patrão o cargo de uma pessoa na empresa

let funcionario = new Pessoa("Jonathan",17);
funcionario.trabalhar();
console.log(funcionario);