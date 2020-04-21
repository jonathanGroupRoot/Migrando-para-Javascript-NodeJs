let btn = document.getElementById('btn');
btn.addEventListener('click',function(event)
{
    console.log(event);
});

window.addEventListener('keydown',function(event)
{
    if(event.key == 'a')
    {
        console.log('Você Apertou a Tecla A');
    }else if(event.key == 'o')
    {
        console.log('Você Apertou a tecla O');
    }
}); 
window.addEventListener('keyup',function(event)
{
    if(event.key == 'o')
    {
        console.log('Você soltou a tecla O');
    }else if(event.key == 'a')
    {
        console.log('Voce soltou a tecla A');
    }
}); 