// \d - Qualquer digito de caractere númerico
// \w - Um caractere alfanúmerico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são digitos 
// \W - Caractere não alfa-númerico
// \S - Caractere que não seja espaço em branco 
// . - Qualquer caractere menos nova linha

const precisao = /\d{5}-\d{3}/; //Vai aceitar no primeio parametro 5 digitos e no segundo 3 caracteres
console.log(precisao.test("32434-232"));

const cpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
console.log(cpf.test("771.098.092-00"));

const cnpj = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
console.log(cnpj.test("12.123.434/9383-21"));

const cep = /\d{5}-\d{3}/;
console.log(cep.test("75105-390"));

const tel = /\d{5}-\d{4}/;
console.log(tel.test("99151-8816"));

const telDD = /\(\d{2}\)\d{5}-\d{4}/;
console.log(telDD.test("(62)99151-8816"));