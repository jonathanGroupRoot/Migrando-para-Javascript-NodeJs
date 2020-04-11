let prop = Promise.resolve(5);

console.log("Outros Códigos");

console.log(prop);
//Chamando o valor de uma promise
prop.then((value) => {console.log(`O valor é ${value}`)});