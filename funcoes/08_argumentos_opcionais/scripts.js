function soma(a,b)
{
    if(a === undefined || b === undefined)
    {
        console.log("Essa função precisa de todos os parametros pra funcionar corretamente");
    }else{
        return a + b;
    }
}
console.log(soma(1));
console.log(soma(5,9));

function saudacao(nome, idade)
{
    if(idade === undefined)
    {
        console.log("Hello Dev " + nome);
    }else{
        console.log("Hello Dev " + nome + " você tem " + idade + " anos");
    }
}
saudacao("jonathan");
saudacao("jonathan",17);