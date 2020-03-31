function Carro(ano,valor)
{
    this.ano = ano;
    this.valor = valor;
    return this.Carro;
}
let gol = new Carro(2014,1500);
console.log(gol.ano);
console.log(gol.valor);
