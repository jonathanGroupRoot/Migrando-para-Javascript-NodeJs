function criaCarro(cor, rodas, preco,ano)
{
    criaCarro = Object.create({});
    criaCarro.cor = cor;
    criaCarro.rodas = rodas;
    criaCarro.preco = preco;
    criaCarro.ano = ano;
    return criaCarro;
}

let golf = criaCarro("preto",4,4000,2020);
console.log(golf);