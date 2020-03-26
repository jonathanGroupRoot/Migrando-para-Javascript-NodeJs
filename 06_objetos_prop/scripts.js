let carro = 
{
    nome: "Gol",
    marca: "GM",
    ano: 2014,
    modelo: "G6",
    ligar: function()
    {
        console.log("Carro Ligado");
    }
}
console.log(carro.nome);
console.log(carro.marca);
delete carro.ano;
console.log(carro.modelo);
carro.ligar();
carro.valor = 23,000;
console.log(carro.valor);