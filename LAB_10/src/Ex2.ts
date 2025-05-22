function cadastrarUsuario(nome: string, idade: number) {
    if (nome.length === 0 || idade <= 0) {
        throw new Error("Dados inválidos.");
    }
     console.log("Usuário cadastrado!");
     }