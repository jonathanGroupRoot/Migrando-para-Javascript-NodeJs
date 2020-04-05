// \d - Qualquer digito de caractere númerico
// \w - Um caractere alfanúmerico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são digitos 
// \W - Caractere não alfa-númerico
// \S - Caractere que não seja espaço em branco 
// . - Qualquer caractere menos nova linha

const frutas = /\d+ (Maçãs|Bananas|Laranjas)/;
console.log(frutas.test("10 Bananas"));
console.log(frutas.test("20 Maçãs"));
console.log(frutas.test("Laranjas"));

const nome = /\w+: (Jonathan|Vincius|Braz|silva)/;
console.log(nome.test("Nome: Jonathan"));