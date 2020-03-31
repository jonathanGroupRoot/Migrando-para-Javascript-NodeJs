class Cachorro
{
    constructor(raca,cor)
    {
        this.raca = raca;
        this.cor = cor;
    }
}
Cachorro.prototype.latir = function () {
    console.log("Au AU");
}
Cachorro.prototype.raca = "SRD";
Cachorro.prototype.patas = 4;

let labrador = new Cachorro("Labrador","Amarelo");
console.log(labrador.patas);

labrador.latir();
console.log(Cachorro.prototype.raca);
console.log(labrador.raca);
