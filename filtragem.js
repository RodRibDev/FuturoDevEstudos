const prompt = require('prompt-sync')();

let numeros = []

for (let i = 0; i < 5; i++){
    let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
    numeros.push(numero);
}

let pares = numeros.filter(numero => numero % 2 === 0);

console.log("Os números pares são:", pares);
