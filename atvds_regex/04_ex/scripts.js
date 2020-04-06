// \d - Qualquer digito de caractere númerico
// \w - Um caractere alfanúmerico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são digitos 
// \W - Caractere não alfa-númerico
// \S - Caractere que não seja espaço em branco 
// . - Qualquer caractere menos nova linha

const verificaIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
console.log(verificaIp.test("123.0.0.1"));
console.log(verificaIp.test("123.0.0..1"));
console.log(verificaIp.test("123.0.0."));
console.log(verificaIp.test("127.0.0.1"));
console.log(verificaIp.test("192.168.0.1"));