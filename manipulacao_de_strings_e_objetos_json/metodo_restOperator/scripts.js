//Uma forma de uma função receber inúmeros parametros
//O operador Rest vira uma array

function imprimirNumeros(...args)
{
    for(num = 0; num <= args.length; num++)
    {
        console.log(num);
    }
}
imprimirNumeros(10,12,9);