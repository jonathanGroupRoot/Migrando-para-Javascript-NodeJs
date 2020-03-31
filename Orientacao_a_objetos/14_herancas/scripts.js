class Pessoa
{
    constructor(nome,idade,endereco)
    {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
    }
}
class Funcionario extends Pessoa
{
    constructor(nome,idade,endereco,cargo)
    {
        super(nome,nome,idade,idade,endereco,endereco)
        this.cargo = cargo;
    }
}

let funcionario = new Funcionario("Jonathan",18,"rua 13 quadra 21","Programador");
console.log(funcionario);