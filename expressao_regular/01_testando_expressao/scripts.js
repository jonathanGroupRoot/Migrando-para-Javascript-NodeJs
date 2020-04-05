const reg = new RegExp('Hello Word'); //Criando um regex

const reg2 = new RegExp("893.983.983.22");

let palavra = "Olá";

console.log(reg.test("Hello Word")); //Testando se o padrão do regex foi atendido
console.log(reg.test("olá"));
console.log(reg2.test("893.983.983.22"));
console.log(reg.test(palavra));