//Inserir Elementos antes
let novoParagrafo = document.createElement('p');
let texto = document.createTextNode("Paragrafo Teste");

novoParagrafo.appendChild(texto);

let elementoAlvo = document.querySelector('#elemento-alvo');
let elementoPai = document.querySelector('#container-principal');

elementoPai.insertBefore(novoParagrafo,elementoAlvo);

//Inserir elementos Depois
let novoH1 = document.createElement('h1');
let text = document.createTextNode("H1 Teste");
novoH1.appendChild(text);


let pai = document.querySelector('#destaque');

let p = pai.parentNode; 

p.appendChild(novoH1);
