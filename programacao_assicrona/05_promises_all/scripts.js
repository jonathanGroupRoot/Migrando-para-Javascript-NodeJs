// function verificaNum(num)
// {
//     const p1 = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             if(num == 2)
//             {
//                 resolve(console.log("Deu certo"));
//             }else
//             {
//                 reject(new Error("Número não é 2"));
//             }
//         },2000);
//     });
// }

// console.log("Hello");
// verificaNum(2);
// verificaNum(4);

// function verificadorNumero(num)
// {
//     const p2 = new Promise(function(resolve,reject) {
//         if(num > 10)
//         {
//             resolve(console.log("Número é " + num));
//         }else
//         {
//             reject(new Error("Número menos que 10 " + num));
//         }
//     });
// }
// verificadorNumero(11);
// verificadorNumero(9);

const p3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(10);
    },2000);
});
const p2 = Promise.resolve(10);


//Resolver Todas as promessas
Promise.all([p3,p2]).then((values) => console.log(values));