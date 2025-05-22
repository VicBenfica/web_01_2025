function executarOperacao() {
    try {
        throw new Error("Erro genérico");
    } catch (erro: unknown) {
        if (erro instanceof Error) {
    console.log("Erro:", erro.message);
    }
    }
}

