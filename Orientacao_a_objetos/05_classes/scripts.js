let pessoa =
{
    nome: "SDN",
    idade: "SDN",
    cargo: function()
    {
        console.log("Trabalhar, trabalhar");
    }
}

let pessoa2 = Object.create(pessoa);
pessoa2.nome = "Jonathan";
pessoa2.idade = 17,
pessoa2.cargo();
console.log(pessoa2.nome);