// \d - Qualquer digito de caractere
// \w - Um caractere alfanúmerico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são digitos 
// \W - Caractere não alfa-númerico
// \S - Caractere que não seja espaço em branco 
// . - Qualquer caractere menos nova linha

const dia = /\d\d/;
console.log(dia.test(23));
console.log(dia.test(21222));