const pessoa = 
{
    maos: 2,
}
console.log(Object.getPrototypeOf(pessoa));

const pessoaNova = Object.create(pessoa); //Estou criando um novo objeto a partir de pessoa;
                                          //O prototype de pessoaNova é pessoa;
console.log(pessoaNova.maos);

console.log(pessoaNova.hasOwnProperty('maos'));

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);