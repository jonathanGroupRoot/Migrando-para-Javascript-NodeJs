const x = 10; //Escopo Global

if(x > 5) {
    const x = 20;
    console.log(x); //Escopo IF pode se declarar uma variavel com msm nome no escopo global com o escopo do if
}
console.log(x); //Escopo Global