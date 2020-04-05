const num = /[123]/;

console.log(num.test(123));
console.log(num.test(1234));


const num2 = /[0-9]/; //Verificar se tem algum número de 0 a 9 no código;
console.log(num2.test(44));