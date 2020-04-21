let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');

let msg = function(event)
{
    console.log('Clicou em mim');
    event.stopPropagation();
 
};
let msg2 = function(event)
{
    console.log('Clicou no segundo');
    event.stopPropagation();
};
btn.addEventListener('click',msg);
btn2.addEventListener('click',msg2);
