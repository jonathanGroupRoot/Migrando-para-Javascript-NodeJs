for(let num = 10; num > 0; num--)
{
    if(num % 2 == 0)
    {
        console.log("caiu no continue");
        continue;
    }
    console.log(num);
}
console.log("Agora é a vez dos números pares");

for(let par = 10; par > 0; par--)
{
    if(par % 2 == 1)
    {
        console.log("Número Impar");
        continue;
    }
    console.log(par);
}
