let novoParagrafo = document.createElement('p');
let texto = document.createTextNode("Paragrafo Substitudo");
novoParagrafo.appendChild(texto);

let head = document.querySelector('#titulo-principal');
let pai = head.parentNode;

pai.replaceChild(novoParagrafo,head);