// \d - Qualquer digito de caractere númerico
// \w - Um caractere alfanúmerico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são digitos 
// \W - Caractere não alfa-númerico
// \S - Caractere que não seja espaço em branco 
// . - Qualquer caractere menos nova linha

const verificaMarca = /marca: (Nike|Adidas|Puma|Asics)/;
console.log(verificaMarca.test("marca: Nike"));
console.log(verificaMarca.test("marca: Adidas"));
console.log(verificaMarca.test("marca: Puma"));
console.log(verificaMarca.test("marca: Asics"));
console.log(verificaMarca.test("marca: cyclone"));