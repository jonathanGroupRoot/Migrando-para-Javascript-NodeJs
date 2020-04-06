// \d - Qualquer digito de caractere
// \w - Um caractere alfanúmerico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são digitos 
// \W - Caractere não alfa-númerico
// \S - Caractere que não seja espaço em branco 
// . - Qualquer caractere menos nova linha

const pontoRegex = /./;
console.log(pontoRegex.test("Hello Word"));

const dRegex = /\d/;
console.log(dRegex.test("Hello"));

const wRegex = /\w/;
console.log(wRegex.test("Hello2"));

const sRegex = /\s/;
console.log(sRegex.test("Olá olá"));

const DRegex = /\D/;
console.log(DRegex.test("Olá")); 
console.log(DRegex.test(32323)); 