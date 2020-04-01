class Compras 
{
    constructor(itens,quantidade,total)
    {
        this.itens = itens;
        this.quantidade = quantidade;
        this.total = total;
    }
    adicionar(produtos)
    {
        this.quantidade += produtos;
        if(this.quantidade > 0)
        {
            this.total += 100;
        }

    }
    remover(produtos)
    {
        this.quantidade -= produtos;
        if(this.quantidade > 0)
        {
            this.total -= 100;
        }
    }
}
let celular = new Compras("xiaomi",0,0);
celular.adicionar(2);
celular.remover(1);
celular.adicionar(1);
celular.adicionar(1);

console.log(celular);

