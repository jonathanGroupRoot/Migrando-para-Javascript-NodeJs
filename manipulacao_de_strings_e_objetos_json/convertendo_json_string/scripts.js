//Criando um JSON
let pessoa = 
{
    "nome": "Jonathan",
    "profissao": "Programador",
}
let toString = JSON.stringify(pessoa); //Convertendo Json para String;
console.log(toString);

 //Convertendo string para JSON;
let toJson = JSON.parse(toString);
console.log(toJson);