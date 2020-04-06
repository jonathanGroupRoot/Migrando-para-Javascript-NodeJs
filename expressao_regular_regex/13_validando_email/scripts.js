// \d - Qualquer digito de caractere númerico
// \w - Um caractere alfanúmerico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são digitos 
// \W - Caractere não alfa-númerico
// \S - Caractere que não seja espaço em branco 
// . - Qualquer caractere menos nova linha

const email = /\w+@\w+\.\w+/;
console.log(email.test("JonathanVinicius211@gmail.com"))
console.log(email.test("JonathanGroupRoot@outllok.com.br"));
console.log(email.test("Jonatham.com.br"));