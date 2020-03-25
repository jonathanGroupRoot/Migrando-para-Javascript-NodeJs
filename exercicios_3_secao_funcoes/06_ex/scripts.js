function adivinha(dado)
{
    
    if(typeof dado === 'number')
    {
        console.log("Esse dado é do tipo Number");
    }else if (typeof dado === "boolean")
    {
        console.log("Esse dado é do tipo Boolean");
    }else if(typeof dado === "string")
    {
        console.log("Esse dado é do tipo string");
    }
}
adivinha(2);
adivinha(true);
adivinha("Hello");