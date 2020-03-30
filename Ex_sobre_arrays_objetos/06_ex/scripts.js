let nums = [1,2,3,4,5,6]
let nums2 = [1,2,3];

function contadorArray(arr)
{
    if(arr.length >= 5) 
    {
        console.log("Array  muito Grande");
    } else
    {
        console.log("Poucos Elementos");
    }
}
contadorArray(nums);
contadorArray(nums2);