// \d - Qualquer digito de caractere
// \w - Um caractere alfanúmerico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são digitos 
// \W - Caractere não alfa-númerico
// \S - Caractere que não seja espaço em branco 
// . - Qualquer caractere menos nova linha

const notAB = /[^ab]/;
console.log(notAB.test("ab"));
console.log(notAB.test("a"));
console.log(notAB.test("b"));
console.log(notAB.test("c"));

const notAz = /[^a-z]/;
console.log(notAz.test("john"));
console.log(notAz.test(12));