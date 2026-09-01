const alunos = [
    { id: 1, nome: "Yuri", curso: "JavaScript" },
    { id: 1, nome: "Victoria", curso: "Node.js" },
    { id: 1, nome: "Evellyn", curso: "Banco de dados" }
];

function buscarAluno(id) {
    return new Promise((resolve, reject) => {
        console.log("Consultando o banco de dados...");

        setTimeout(() => {
            const aluno = alunos.find((item) => item.id === id)
            if (aluno) {
                resolve(aluno)
            } else {
                reject(new Error("Aluno não encontrado"));
            }
        }, 2000)

    });
}

async function mostrarAluno() {
    try {
        const aluno = await buscarAluno(1);
        console.log("Aluno encontrado");
        console.log("ID", aluno.id);
        console.log("Nome", aluno.nome);
        console.log("Curso", aluno.curso);
    } catch (erro) {
        console.log("Erro na consulta:", erro.message);
    }
}
mostrarAluno();