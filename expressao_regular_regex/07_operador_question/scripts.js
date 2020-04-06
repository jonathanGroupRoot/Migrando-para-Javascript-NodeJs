// \d - Qualquer digito de caractere númerico
// \w - Um caractere alfanúmerico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são digitos 
// \W - Caractere não alfa-númerico
// \S - Caractere que não seja espaço em branco 
// . - Qualquer caractere menos nova linha

//Esse operador faz que o digito anterios será opcional
const enem = /Enem\s?\d?/;
console.log(enem.test("Enem"));
console.log(enem.test("Enem2"));