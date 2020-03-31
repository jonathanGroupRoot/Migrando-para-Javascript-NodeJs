const pessoa = 
{
    nome: " ",
    setNome: function(novoNome)
    {
        this.nome = novoNome;
    },
    getNome: function()
    {
        return this.nome;
    }
}

pessoa.setNome("Jonathan");
console.log(pessoa.getNome());