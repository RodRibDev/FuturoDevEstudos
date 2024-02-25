const prompt = require('prompt-sync')();

let numeros = []

for (let i = 0; i < 5; i++){
    let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
    numeros.push(numero);
}

let quadrado = numeros.map(n => {
    return n ** 2
  })

console.log(quadrado)
  