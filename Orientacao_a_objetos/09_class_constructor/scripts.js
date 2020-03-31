class Funcionario
{
    constructor(nome,idade,horario,cargo)
    {
        this.nome = nome;
        this.idade = idade;
        this.horario = horario;
        this.cargo = cargo;
    }
}
Funcionario.prototype.trabalhar = function trabalhar() {
    console.log("Trabalhar Vagabundo");
}

let pessoa = new Funcionario();
pessoa.nome = "Jonathan";
pessoa.idade = 17;
pessoa.horario = "12:30";
pessoa.cargo = "Programador";
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.horario);
console.log(pessoa.cargo);
pessoa.trabalhar();
