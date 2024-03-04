async function getUserInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const userInfo = {
                nome: "Usuário01",
                idade: 37,
                email: "usuario01@email.com"
            };
            resolve(userInfo);
        }, 2000);
    });
}

function printUserInfo() {
    getUserInfo()
        .then((userInfo) => {
            console.log("Informações do Usuário:", userInfo);
        })
        .catch((error) => {
            console.error("Erro ao obter informações do usuário:", error);
        });
}

printUserInfo();