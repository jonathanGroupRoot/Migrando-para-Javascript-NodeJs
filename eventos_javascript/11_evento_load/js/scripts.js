// window.addEventListener('load',function()
// {
//     alert('Aceite nossos termos e condições');
// });

window.addEventListener('beforeunload',function(event)
{
    event.returnValue = null;
});