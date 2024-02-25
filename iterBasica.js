const prompt = require('prompt-sync')();

let numeros = []

for (let i = 0; i < 5; i++){
    let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
    numeros.push(numero);
}

console.log("Números no array:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}