const prompt = require('prompt-sync')();

let frutas = []

for (let i = 0; i < 3; i++){
    let fruta = prompt("Digite o nome de uma fruta:");
    frutas.push(fruta);
}

frutas.push("banana");

frutas.shift();

console.log(frutas)