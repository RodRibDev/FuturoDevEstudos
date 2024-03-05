function exibirImages() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => response.json())
        .then(data => {
            data.forEach(image => {
                document.write(`<img src='${image.url}'/> <br />`);
            });
        })
        .catch(error => {
            console.log(error);
        });
}

exibirImages();