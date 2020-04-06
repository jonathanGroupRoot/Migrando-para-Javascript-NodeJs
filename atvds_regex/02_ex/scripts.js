// \d - Qualquer digito de caractere númerico
// \w - Um caractere alfanúmerico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são digitos 
// \W - Caractere não alfa-númerico
// \S - Caractere que não seja espaço em branco 
// . - Qualquer caractere menos nova linha

const verificaID = /\d+ID\b/;
console.log(verificaID.test("Hello WordID"));
console.log(verificaID.test("Hello Word2"));
console.log(verificaID.test("Hello Word"));
console.log(verificaID.test("ID"));
console.log(verificaID.test("2102102010ID"));