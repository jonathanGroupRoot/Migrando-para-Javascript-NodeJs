let arr = [1,2,3,4,6,7];
let arr2 = [];
function interarArray(num)
{
    if(num.length == 0)
    {
        throw new Error("O array precisa ter elementos");
    }else
    {
        for(let i = 0; i < arr.length; i++)
        {
            console.log(i);
        }
    }
}
function arrayVazio(arr)
{
    if(arr.length > 0)
    {
        throw new Error("O array precisa ser vazio");
    }else
    {
        console.log("Tudo Okay");
    }
}
interarArray(arr);
interarArray(arr2);
arrayVazio(arr);
arrayVazio(arr2);