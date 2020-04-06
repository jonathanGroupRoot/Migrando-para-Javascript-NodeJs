// \d - Qualquer digito de caractere númerico
// \w - Um caractere alfanúmerico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são digitos 
// \W - Caractere não alfa-númerico
// \S - Caractere que não seja espaço em branco 
// . - Qualquer caractere menos nova linha

const nomeUsuario = /^(?=.{3,16}$)[a-z0-9-_ ]/;
console.log(nomeUsuario.test("jon_v-2"));
console.log(nomeUsuario.test("jo2"));
console.log(nomeUsuario.test("matheus_123"));