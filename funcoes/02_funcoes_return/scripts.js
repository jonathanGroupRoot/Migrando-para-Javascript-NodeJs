function soma(a,b)
{
    return a + b;
}
console.log(soma(2,2));

const mult = function multiplicar(x,y)
{
    return x * y;
}
console.log(mult(2,9));

function podeDirigir(idade,cnh)
{
    if(idade >= 18 && cnh == true)
    {
        console.log("Você está hábito há dirigir");
    }else if(idade <= 18 && cnh == false)
    {
        console.log("Você não hábito há dirigir");
    }else if(idade > 18 && cnh == false)
    {
        console.log("Você pode dirigir mas não tem carteira")
    }
}
podeDirigir(19, false);