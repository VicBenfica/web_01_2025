//Normal
function maiuscula(p: string):string{
    return p.toUpperCase();
}
console.log(maiuscula("Olá mundo"));

//No Arrow
const maiusculaArrow= (p: string): string => p.toUpperCase();
console.log(maiusculaArrow("Olá"));


//a implementação com função tradicional e arrow function.