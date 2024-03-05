fetch("./data.json")
.then((dados) => {
    return dados.json()
})
.then((mostraDados) => {
    const dadosFormatados = JSON.stringify(mostraDados, null, "  ");
    document.write("<br>" + dadosFormatados + "</br>");
})
.catch((erro) => {
    console.error("Erro ao obter os dados:", erro);
});