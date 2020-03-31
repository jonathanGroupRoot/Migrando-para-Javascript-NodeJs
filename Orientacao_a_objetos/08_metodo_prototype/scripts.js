function Funcionario(nome,cargo,horario)
{
    this.nome = nome;
    this.cargo = cargo;
    this.horario = horario;
}
Funcionario.prototype.trabalhar = function()
{
    console.log("Trabalhar Vagabundo");
}

let pessoa = new Funcionario;
pessoa.nome = "Jonathan";
pessoa.cargo = "Programador";
pessoa.horario = "21:30";
console.log(pessoa.nome);
console.log(pessoa.cargo);
console.log(pessoa.horario);
pessoa.trabalhar();