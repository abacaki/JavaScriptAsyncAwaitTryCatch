async function cadastroUsuario(nome, idade) {
    try {
        if (!nome) {
            throw new Error("O nome é obrigatório");
        }
        if (idade < 18) {
            throw new Error("O usuário precisa ter 18 anos ou mais");
        }
        console.log("Usuário cadastrado com sucesso!");
        console.log("Nome", nome);
        console.log("Idade", idade);

    } catch (e) {
        console.log("Erro no cadastro:", e.message)
    }
}

cadastroUsuario("Yuri", 16);