let Banco = function(nome)
{
    this.nome = nome;
    this.sacarDinheiro = function(sacar)
    {
        console.log(`Você sacou ${sacar} reais`);
    }
    this.depositarDinheiro = function(depositar)
    {
        console.log(`Você depositou ${depositar} reais`);
    }
}

let cliente = new Banco();
cliente.nome = "Jonathan";
cliente.depositarDinheiro(300);
cliente.sacarDinheiro(500);