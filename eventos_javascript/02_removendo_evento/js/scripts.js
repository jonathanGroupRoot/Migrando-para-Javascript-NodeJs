let but = document.querySelector('#btn');
let msg = function()
{
    console.log('Deu Certo');
}
but.addEventListener('click',msg);

let but2 = document.querySelector('#btn2');

but2.addEventListener('click',function()
{
    but.removeEventListener('click',msg);
});




let alerta = document.querySelector('#alerta');
let msg2 = function()
{
    console.log('Testando Alert');
};
alerta.addEventListener('click',msg2);

let cons = document.querySelector('#console');


let msg3 = function()
{
    console.log('Imprimindo no console');
};
cons.addEventListener('click',msg3);

let removerAlerta = addEventListener('click', function()
{
    cons.removeEventListener('click',msg3)
});

let buscaCor = document.getElementById('calor');
buscaCor = addEventListener('click', function(event)
{   
    let calor = document.getElementById('calor2');
    calor.style.color = 'red';
    calor.style.fontSize = '50px';
    event.stopPropagation();
});



