class Pessoa
{
    constructor(nome,idade)
    {
        this.nome = nome;
        this.idade = idade;
    }
    get verNome()
    {
        return this.nome;
    }
    set mudarNome(nome)
    {
        this.nome = nome;
    }   
    get verIdade()
    {
        return this.idade;
    }
    set mudeIdade(idade)
    {
        this.idade = idade;
    }
}
let pessoa = new Pessoa("Jonathan",17);
console.log(pessoa);

pessoa.mudarNome = "Braz";
pessoa.mudeIdade = 18;
console.log(pessoa.verNome);
console.log(pessoa.verIdade);