// \d - Qualquer digito de caractere númerico
// \w - Um caractere alfanúmerico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são digitos 
// \W - Caractere não alfa-númerico
// \S - Caractere que não seja espaço em branco 
// . - Qualquer caractere menos nova linha

const data = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;
console.log(data.test("08/01/2003"));
console.log(data.test("08/04/2000"));
console.log(data.test("01/20/2020"));