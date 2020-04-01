class Conta
{
    constructor(saldoContaC,saldoContaPou,jurosDaPou)
    {
        this.saldoContaC = saldoContaC;
        this.saldoContaPou = saldoContaPou;
        this.jurosDaPou = jurosDaPou;
    }
    depositarContaC(dinheiro)
    {
        this.saldoContaC += dinheiro;
    }
    sacarContaC(dinheiro)
    {
        this.saldoContaC -= dinheiro;
    }
    depositarContaPou(dinheiro)
    {
        this.saldoContaPou += dinheiro;
    }
    sacarContaPou(dinheiro)
    {
        this.saldoContaPou -= dinheiro;
    }
    tranferirContaC(dinheiro)
    {
        this.saldoContaPou -= dinheiro;
        this.saldoContaC += dinheiro;
    }
}
class ContaEspecial extends Conta
{
    constructor(saldoContaC,saldoContaPou,jurosDaPou)
    {
        super(saldoContaC,saldoContaC,saldoContaPou,saldoContaPou,jurosDaPou,jurosDaPou);
        this.saldoContaC = saldoContaC;
        this.saldoContaPou = saldoContaPou;
        this.jurosDaPou = jurosDaPou;
    }
}

let conta = new Conta(2000,3000,1.4);
conta.depositarContaC(2000);
conta.depositarContaPou(2000);
conta.tranferirContaC(1000);
console.log(conta);

let contaEspecial = new ContaEspecial(4000,9000,1.8);
contaEspecial.depositarContaPou(3000);
console.log(contaEspecial);