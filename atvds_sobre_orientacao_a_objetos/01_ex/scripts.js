class Banco
{
    constructor(nome,conta,digito,tipoDeConta,saldo)
    {
        this.nome = nome;
        this.conta = conta;
        this.digito = digito;
        this.tipoDeConta = tipoDeConta;
        this.saldo = saldo;
    }
    deposito(dinheiro)
    {
        this.saldo += dinheiro;
    }
    saque(dinheiro)
    {
        this.saldo -= dinheiro;
    }
}
let cliente = new Banco("Jonathan","292929","1","Poupança",0);
cliente.deposito(400);
cliente.saque(200);
console.log(cliente);