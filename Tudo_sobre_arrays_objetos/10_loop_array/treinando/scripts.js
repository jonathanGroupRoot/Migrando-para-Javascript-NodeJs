let nomes = ["Maria","João","José","Jonathan","Léo"];

for(cont = 0; cont <= nomes.length; cont++)
{
    console.log(nomes[cont]);
}

let num = [1,2,3,4,5,6,7,8,9,10];
for(par = 0; par <= num.length; par++)
{
    if(par % 2 == 0)
    {
        console.log("O número é par " + par);
    }else{
        console.log("O número é impar " + par); 
    }
}