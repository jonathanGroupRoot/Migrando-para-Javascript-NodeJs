//Para determinar uma função generator basta colocar o function*

function* criadorId()
{
    let id = 0;
    while(true)
    {
        yield id++;
    }
}
let criaId = criadorId();
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);


// function* criadorId()
// {
//     for(let id = 0; id < 100; id++)
//     {
//         console.log(id);
//     }
// }
// criaId = criadorId();
// console.log(criaId.next().value);