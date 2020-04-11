function VerificadorPar(num)
{
    const p1 = new Promise(function(resolve, reject)
    {
        if(num % 2 == 0)
        {
            resolve(console.log("O número e par"));
        }else{
           reject(console.log("Número Impar"));
        }
    });
}
VerificadorPar(4);
VerificadorPar(7);