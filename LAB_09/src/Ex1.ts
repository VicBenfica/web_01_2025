class StringComparator{
    static compararStrings(s1: string, s2: string): boolean{
        const texto1= s1.trim().toUpperCase();
        const texto2= s2.trim().toUpperCase();

        return texto1==texto2;
    }
}

//UM MÉTODO TEM QUE ESTAR DENTRO DE UMA CLASSE, PARA CHAMAR, COLOCAR CLASSE.NOMEMETODO

console.log(StringComparator.compararStrings("Hello", "hello")); 
console.log(StringComparator.compararStrings("camelCase", "CAMELcase")); 
console.log(StringComparator.compararStrings(" TypeScript ", "typescript")); 
console.log(StringComparator.compararStrings("Different", "Strings")); 