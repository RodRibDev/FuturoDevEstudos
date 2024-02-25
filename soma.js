const prompt = require('prompt-sync')();

let numeros = []

for (let i = 0; i < 5; i++){
    let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
    numeros.push(numero);
}

let soma = numeros.reduce((total, numeroAtual) => total + numeroAtual, 0)

console.log(soma);
