let timeout;
window.addEventListener('mousemove',function(event){
    clearTimeout(timeout)
    timeout = setTimeout(function()
    {
        console.log(event.x);
    },500);
});