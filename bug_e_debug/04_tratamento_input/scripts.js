function chegarNumero(num)
{
    let number = Number(num);
    if(Number.isNaN(number))
    {
        console.log("Digite Somente números");
    }
    else
    {
        return number;
    }
}
console.log(chegarNumero(3));
chegarNumero("jdjdj");