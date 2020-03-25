let calc = parseInt(prompt("Digite 1 adição 2 multiplicação 3 subtração 4 divisão 5 raiz quadrada"));

if(calc == 1)
{
    const som1 = prompt("Digite um número pra realizar uma adição");
    const som2 = prompt("Digite outro número");
    const calcSoma = parseInt (som1) + parseInt (som2);
    alert("O resultado da soma é " + calcSoma);
}else if(cal == 2)
{
    const mul1 = prompt("Digite um número para a multiplicação");
    const mul2 = prompt("Digite outro número");
    const calMul = parseInt(mul1) * parseInt(mul2);
    alert("O resultado da multiplicação é " + calMul);
}else if(cal == 3)
{
    const sub1 = prompt("Digite um número para fazer a subtração");
    const sub2 = prompt("Digite outro número");
    const calSub = parseInt(sub1) + parseInt(sub2);
    alert("O resultado da subtração é " + calSub);
}else if(cal == 4)
{
    const div1 = prompt("Digite um número para a divisão");
    const div2 = prompt("Digite outro número");
    const calDiv = parseInt (div1) + parseInt (div2);
    alert("O resultado da multiplicação é " + calDiv);
}else if(cal == 5){
    const num = prompt("Digite um número para saber sua raiz quadrada");
    const raiz = Math.sqrt(parseInt(num));
    alert("A raiz quadrada do número digitado é " + raiz);
   
}else{
    alert("Opção Invalida");
}

