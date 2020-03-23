let num = 5;
let divisoes = 0;

for(let primo = 1; primo <= num; primo++)
{
    if(num % primo == 0)
    {
        divisoes++;
    }
}
if(divisoes == 2)
{
    console.log(`O número ${num} é primo`);
}else{
    console.log(`O número ${num} não é primo`);
}