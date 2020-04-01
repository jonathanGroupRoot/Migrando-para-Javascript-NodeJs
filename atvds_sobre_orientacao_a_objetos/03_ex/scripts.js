class Endereco
{
     constructor(rua,bairro,cidade,estado,)
    {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    get verBairro()
    {
        return this.bairro;
    }
    set mudarBairro(bairro)
    {
        this.bairro = bairro;
    }
    get verEstado()
    {
        return this.estado;
    }
    set mudarEstado(estado)
    {
        this.estado = estado;
    }
    get verCidade()
    {
        return this.cidade;
    }
    set mudarCidade(cidade)
    {
        this.cidade = cidade;
    }
    get verRua()
    {
        return this.rua;
    }
    set mudarRua(rua)
    {
        this.rua = rua;
    }
    get verEndereco()
    {
        return Endereco.prototype[endereco];
    }
    set mudarEndereco(endereco)
    {
        this.endereco = endereco;
    }
}
let endereco = Symbol();
Endereco.prototype[endereco] = "Rua 13 Quadra 21 lote 12 Jardim Arco Verde";

let morador = new Endereco("23","Arco Verde","Anápolis","GO");
console.log(morador.verEndereco);
console.log(morador.verEstado);
console.log(morador.verCidade);
console.log(morador.verRua);

morador.mudarCidade = "Goiania";
morador.mudarEstado = "Rio Grande";
console.log(morador.verCidade);
console.log(morador.verEstado);