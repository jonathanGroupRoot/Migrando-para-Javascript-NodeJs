let prop = Promise.resolve(new Error("Não deu certo"));
console.log("Outro código");

prop.then((value) => console.log(value))    
.catch(reason => console.log("Falhou" + reason));