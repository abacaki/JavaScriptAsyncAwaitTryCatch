function prepararPedido() {
    return new Promise((resolve, reject) => {
        console.log("Preparando pedido...")

        setTimeout(() => {

            const deuBom = false;
            if (deuBom) {
                resolve("Hambúrger pronto!"); //sucesso
            } else {
                reject("Deu erro ao preparar o hambúrger"); //erro
            }

        }, 3000)
    })
}

prepararPedido()
    .then((resultado) => {//Tudo deu certo
         console.log(resultado);
})
    .catch((erro) => {//Algo de errado aconteceu
        console.log(erro);
})