function contaCaracteres(caract)
{
    if(caract.length > 10)
    {
        console.log("Texto longo");
    }else if(caract.length < 10){
        console.log("Texto no limite");
    }
    console.log(caract.length)
}
contaCaracteres("ajsjsjsjsjsjsjj");
contaCaracteres("1");
contaCaracteres("testando a função");
contaCaracteres("Hello");