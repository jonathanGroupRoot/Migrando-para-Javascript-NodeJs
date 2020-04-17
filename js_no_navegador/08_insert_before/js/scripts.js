let novoParagrafo = document.createElement('p');
let texto = document.createTextNode("Destaque deu certo");
novoParagrafo.appendChild(texto);

let elementoAlvo = document.querySelector('#nome-destaque');
let elementoPai = document.querySelector('#destaque');

elementoPai.insertBefore(novoParagrafo, elementoAlvo);