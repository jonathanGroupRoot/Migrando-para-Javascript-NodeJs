const calculadora =
{
    soma: function(a,b)
    {
        return a + b;
    },
    multiplica: function(a,b)
    {
        return a * b;
    },
    dividir: function(a,b)
    {
        return a / b;
    },
    diminuir: function(a,b)
    {
        return a - b;
    }
}
console.log(calculadora.soma(2,9));
console.log(calculadora.multiplica(5,5));
console.log(calculadora.dividir(40,2));
console.log(calculadora.diminuir(50,25));