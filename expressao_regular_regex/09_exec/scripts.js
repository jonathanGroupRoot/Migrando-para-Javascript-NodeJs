// \d - Qualquer digito de caractere númerico
// \w - Um caractere alfanúmerico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são digitos 
// \W - Caractere não alfa-númerico
// \S - Caractere que não seja espaço em branco 
// . - Qualquer caractere menos nova linha

//O metodo Exec retorna um objeto com as caracteristicas e o input;
const num = /\d+/;
console.log(num.exec("Tem algum número aqui EX 100"));
console.log(num.exec("Hello Word"));
