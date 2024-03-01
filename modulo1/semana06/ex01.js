function verificaPar(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve("Número validado é par");
        } else {
            reject("Error: Número informado é impar ")
    }
});
}

verificaPar(6)
.then((mensagem) => {
    console.log(mensagem);
})
.catch((mensagem) => {
    console.log(mensagem)
})
