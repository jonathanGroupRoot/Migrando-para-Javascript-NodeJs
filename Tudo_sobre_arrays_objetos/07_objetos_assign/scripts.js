let carro =
{
    ano: 2018,
    marca: "Chevrolet",
    cor: "Preto",
    valor: "1.500"
}
let adicionais = 
{
    arCondicionado: true,
    gps: true
}

Object.assign(carro, adicionais); //Quer dizer que está atribuindo o primeiro objeto com o segundo
console.log(carro);