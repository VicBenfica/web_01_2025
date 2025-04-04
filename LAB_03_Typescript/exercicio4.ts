let Numeross: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91, 105, 120, 33, 47, 52];
let multiplosDe3: number[] = [];
let multiplosDe5: number[] = [];
let outros: number[] = [];

let total3 = 0, total5 = 0, outrosTotal = 0;
let maior3 = -Infinity, maior5 = -Infinity, outrosMaior = -Infinity;
let menor3 = Infinity, menor5 = Infinity, outrosMenor = Infinity;

// Separar os números nos arrays corretos
for (const num of Numeross) {
    if (num % 3 === 0) {
        multiplosDe3.push(num);
        total3 += num;
        if (num > maior3) maior3 = num;
        if (num < menor3) menor3 = num;
    }
    if (num % 5 === 0) {
        multiplosDe5.push(num);
        total5 += num;
        if (num > maior5) maior5 = num;
        if (num < menor5) menor5 = num;
    }
    if (num % 3 !== 0 && num % 5 !== 0) {
        outros.push(num);
        outrosTotal += num;
        if (num > outrosMaior) outrosMaior = num;
        if (num < outrosMenor) outrosMenor = num;
    }
}

// Função para ordenar um array em ordem decrescente sem usar sort()
function ordenarDecrescente(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {  // Percorre o array
        for (let j = i + 1; j < arr.length; j++) {  // Compara com os próximos elementos
            if (arr[i] < arr[j]) {  // Se encontrar um número maior...
                [arr[i], arr[j]] = [arr[j], arr[i]];  // Troca as posições
            }
        }
    }
    return arr;  // Retorna o array ordenado
}


// Função para calcular a mediana
function calcularMediana(numeros: number[]): number {
    if (numeros.length === 0) return 0;  // Evita erro caso o array seja vazio

    let ordenado = ordenarDecrescente([...numeros]);  // Ordena sem modificar o original
    let meio = Math.floor(ordenado.length / 2);  // Encontra a posição central

    return ordenado.length % 2 !== 0  
        ? ordenado[meio]  // Se ímpar, retorna o número do meio
        : (ordenado[meio - 1] + ordenado[meio]) / 2;  // Se par, média dos dois centrais
}

// Calcular estatísticas
let Media3 = multiplosDe3.length > 0 ? total3 / multiplosDe3.length : 0;
let Media5 = multiplosDe5.length > 0 ? total5 / multiplosDe5.length : 0;
let outrosMedia = outros.length > 0 ? outrosTotal / outros.length : 0;

// Ordenar os arrays antes de exibir
ordenarDecrescente(multiplosDe3);
ordenarDecrescente(multiplosDe5);
ordenarDecrescente(outros);

// Exibir os resultados
console.log(`Os números múltiplos de 3 são: ${multiplosDe3}`);
console.log(`O maior número múltiplo de 3 é: ${maior3}`);
console.log(`O menor número múltiplo de 3 é: ${menor3}`);
console.log(`A média dos múltiplos de 3 é: ${Media3}`);
console.log(`A soma dos múltiplos de 3 é: ${total3}`);
console.log(`A mediana dos múltiplos de 3 é: ${calcularMediana(multiplosDe3)}`);

console.log(`Os números múltiplos de 5 são: ${multiplosDe5}`);
console.log(`O maior número múltiplo de 5 é: ${maior5}`);
console.log(`O menor número múltiplo de 5 é: ${menor5}`);
console.log(`A média dos múltiplos de 5 é: ${Media5}`);
console.log(`A soma dos múltiplos de 5 é: ${total5}`);
console.log(`A mediana dos múltiplos de 5 é: ${calcularMediana(multiplosDe5)}`);

console.log(`Os números que não são múltiplos de 3 nem de 5 são: ${outros}`);
console.log(`O maior número dos outros é: ${outrosMaior}`);
console.log(`O menor número dos outros é: ${outrosMenor}`);
console.log(`A média dos outros é: ${outrosMedia}`);
console.log(`A soma dos outros é: ${outrosTotal}`);
console.log(`A mediana dos outros é: ${calcularMediana(outros)}`);
