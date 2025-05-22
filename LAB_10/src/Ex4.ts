class Pessoa {
    constructor(
        public nome: string,
        public email: string,
        public dataNascimento: string
    ) {}

    validarNome(): void {
        const nomeAjustado = this.nome.trim().toUpperCase();

        if (this.nome !== this.nome.trim()) {
            console.log("Nome não pode ter espaços no início ou fim.");
        }

        this.nome = nomeAjustado;
        console.log("Nome validado:", this.nome);
    }

    validarEmail(): void {
        if (!this.email.includes('@') || !this.email.includes('.com')) {
            console.log("Email inválido. Deve conter '@' e '.com'.");
        } else {
            console.log("Email validado:", this.email);
        }
    }

    validarDataNascimento(): void {
        const regexData = /^\d{2}\/\d{2}\/\d{4}$/;

        if (!regexData.test(this.dataNascimento)) {
            console.log("Data de nascimento inválida. Use o formato DD/MM/YYYY.");
            return;
        }

        const [dia, mes, ano] = this.dataNascimento.split("/").map(Number);
        const dataNascimento = new Date(ano, mes - 1, dia);
        const hoje = new Date();

        const idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const jaFezAniversario =
            hoje.getMonth() > dataNascimento.getMonth() ||
            (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() >= dataNascimento.getDate());

        const idadeFinal = jaFezAniversario ? idade : idade - 1;

        if (idadeFinal > 100) {
            console.log("A pessoa não pode ter mais de 100 anos.");
        } else {
            console.log("Data de nascimento válida:", this.dataNascimento, "- Idade:", idadeFinal);
        }
    }
}
