let elemento = document.getElementById('titulo-principal');
console.log('largura ' + elemento.offsetWidth);//Considera as bordas
console.log('Altura ' + elemento.offsetHeight); 


console.log('largura ' + elemento.clientWidth); //desConsidera as bordas
console.log('Altura ' + elemento.clientHeight); 


let lista = document.createElement('ul');


for(dado = 0; dado < 5; dado++)
{
    let dadosLista = document.createElement('li');
    let texto = document.createTextNode('Número ' + dado);
    dadosLista.appendChild(texto);
    lista.appendChild(dadosLista);
}

let container = document.getElementById('container-principal');
container.appendChild(lista);



let list = document.createElement('ul');

for(listDados = 0; listDados <= 10; listDados++)
{
    let criaLi = document.createElement('li');
    let text = document.createTextNode('Seu número é ' + listDados);
    criaLi.appendChild(text);
    list.appendChild(criaLi);
}

let sub = document.getElementById('sub-container');
sub.appendChild(list);