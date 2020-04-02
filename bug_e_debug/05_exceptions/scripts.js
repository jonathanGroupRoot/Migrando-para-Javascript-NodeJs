function saudacao(str)
{
    if(typeof str != 'string')
    {
        throw new Error("Parametro nome precisa ser string");
    }else
    {
        console.log(`${str}`)
    }
}
saudacao("Hello");
saudacao(9);