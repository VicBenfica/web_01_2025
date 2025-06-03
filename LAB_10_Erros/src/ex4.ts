//Exercício4 Validação de Classe Pessoa Dada a classe Pessoa, implemente métodos que validem:
//Se a data de nascimento está no formato DD/MM/yyyy e a pessoa tem menos de 100 anos.
//Se o nome não possui espaços no início ou fim e é convertido para maiúsculas.
//Se o e-mail contém '@' e '.com'.

class Pessoa {

constructor(
public nome: string,
public email: string,
public dataNascimento: string
) {}
validarNome(): void {
    const nomeFormatado = this.nome.trim().toUpperCase();

    if(nomeFormatado.length == 0){
        throw new Error("Nome inválido: não pode ser vazio.");
    }

    this.nome = nomeFormatado;
    console.log("Nome válido:", this.nome);
}
validarEmail(): void {
    if (!this.email.includes('@') || !this.email.includes('.com')) {
        console.log("Email inválido. Deve conter '@' e '.com'.");
    } else {
        console.log("Email validado:", this.email);
    }
}
validarDataNascimento(): void {
    const regex =  /^\d{2}\/\d{2}\/\d{4}$/;
    if(!regex.test(this.dataNascimento)){
        throw new Error("Data inválida: use o formato DD/MM/YYYY");
    }

    const [dia,mes,ano] = this.dataNascimento.split("/").map(Number);
    const dataNasc = new Date(ano,mes -1,dia);
    // o / divide a data onde tem o /, o map tranforma em numero
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNasc.getFullYear();

    const aniversarioPassou =
        hoje.getMonth() >dataNasc.getMonth() ||
        (hoje.getMonth()=== dataNasc.getMonth() &&
        hoje.getDate() >= dataNasc.getDate());

        const idadeReal = aniversarioPassou ? idade : idade -1;

        if(idadeReal < 0 || idadeReal >100){
            throw new Error("Idade inválida: deve ter entre 0 e 100.");
        }
        console.log("Data de nascimento valida:", this.dataNascimento);

}
}