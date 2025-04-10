type Aluno = {
    nome: string;
    nota: number;
    };

    const alunos: Aluno[] = [
        { nome: "Alice", nota: 8 },
        { nome: "Bruno", nota: 5 },
        { nome: "Carla", nota: 7 },
        { nome: "Daniel", nota: 6 }
        ];
        // Implementar uma função que retorna apenas os alunos com nota >= 7

    let aprovados = alunos.filter(aluno => aluno.nota >=7);

    console.log(aprovados);