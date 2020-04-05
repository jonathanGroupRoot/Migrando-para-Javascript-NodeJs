// \d - Qualquer digito de caractere númerico
// \w - Um caractere alfanúmerico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são digitos 
// \W - Caractere não alfa-númerico
// \S - Caractere que não seja espaço em branco 
// . - Qualquer caractere menos nova linha

const url = /[?www.]\w+.com|.com.br/;
console.log(url.test("www.groupRoot.com.br"));
console.log(url.test("www.groupRoot.com"));
console.log(url.test("groupRoot.com.br"));