// \d - Qualquer digito de caractere númerico
// \w - Um caractere alfanúmerico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são digitos 
// \W - Caractere não alfa-númerico
// \S - Caractere que não seja espaço em branco 
// . - Qualquer caractere menos nova linha

const frase = /\D+/; //Poderá receber quantos digitos você passar;
console.log(frase.test("Hello Word"));
console.log(frase.test("Olá"));