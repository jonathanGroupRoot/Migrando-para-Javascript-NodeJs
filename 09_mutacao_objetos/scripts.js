let pessoa =
{
    nome: "Jonathan",
    idade: 12
}

pessoa2 = pessoa;
console.log(pessoa == pessoa2);
pessoa2.nome = "Teste";
console.log(pessoa2.nome);