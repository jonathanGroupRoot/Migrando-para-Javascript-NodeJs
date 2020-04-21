window.addEventListener('mousedown',function()
{
    console.log('Você Apertou o mouse');
});

window.addEventListener('mouseup',function()
{
    console.log('Você soltou o botão');
});

window.addEventListener('dblclick',function()
{
    setTimeout(function()
    {
        alert('Você clicou duas vezes seguidas');
    },4000);
});

let buscaID = document.getElementById('btn2');
buscaID.addEventListener('contextmenu',function(event)
{
    event.preventDefault();
    console.log('Você clicou no lado direito'); 
}); 