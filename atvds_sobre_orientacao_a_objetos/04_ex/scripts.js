class Carro
{
    constructor(marca,cor,gasolinaRestante,consumo)
    {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }
    dirigir(km)
    {
        let litrosConsumidos = km / this.consumo;
        this.gasolinaRestante -= litrosConsumidos;
    }
    abastecer(litros)
    {
        this.gasolinaRestante += litros;
    }
}
let carro = new Carro("Ford","Vermelho",100,14);
console.log(carro);

carro.dirigir(23);
console.log(carro);

carro.dirigir(30);
console.log(carro);


carro.dirigir(40);
console.log(carro);

carro.abastecer(20);
console.log(carro);