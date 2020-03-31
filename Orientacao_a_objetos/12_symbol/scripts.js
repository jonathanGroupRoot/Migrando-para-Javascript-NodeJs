class Banco 
{
    constructor(nome,conta,tipoDeConta)
    {
        this.nome = nome;
        this.conta = conta;
        this.tipoDeConta = tipoDeConta;
    }
    sacar(dinheiro)
    {
        console.log(`Você sacou ${dinheiro} reais`);
    }
    depositar(dinheiro)
    {
        console.log(`Você depositou ${dinheiro} reais`);
    }
}
let digito = Symbol(); //Esse metodo define uma constante na classe que não pode se repetir
Banco.prototype[digito] = 0;//e nem ser alterada

let banco = new Banco("Jonathan","09293-0","Poupança");
console.log(banco);
console.log(Banco.prototype[digito]);//Acessando o symbol
banco.depositar(500);
banco.sacar(200);