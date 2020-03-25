function soma(x)
{
    return function(y)
    {
        return x + y;
    }
}

const lembrarSoma = soma(5);

console.log(lembrarSoma(4));

const soma2 = soma(9);

console.log(soma2(9));

function contador(i)
{
    let cont = i;
    let somaContador = function()
    {
        console.log(cont);
        cont++;
    }
    return somaContador;
}

const meuContador = contador(5);
meuContador();
meuContador();