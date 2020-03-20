let nome = "vinicius";

for(let num = 0; num < 10; num++)
{
    if(num == 3)
    {
        nome = "jonathan";
    }
    if(num == 5 && nome == "jonathan")
    {
        console.log("O nome é jonathan pode parar por aqui");
        break;
    }
    console.log(num);
}