function verificaNumero(num)
{
    let prop = new Promise((resolve,reject) => {
        if(num == 2)
        {
            resolve(console.log(`O número é ${num}`));
        }else
        {
            reject(new Error("Falhou"));
        }
    });
}
verificaNumero(2);
verificaNumero(4);