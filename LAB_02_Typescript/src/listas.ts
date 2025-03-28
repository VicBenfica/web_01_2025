  // Lista de números
  let numbers: number[] = [1, 2, 3, 4, 5];
  // Lista de strings
  let nomes: string[] = ["Ana", "João", "Maria"];
  let posJoao: number = nomes.indexOf("João")//pegar o indice do elemento, no caso 1
  console.log(posJoao)
  nomes.splice(posJoao,posJoao)//corta o elemento entre dos dois elementos
  
  console.log(nomes)
  
  // Lista genérica (usando Array<tipo>)
  let Idades: Array<number> = [20, 30, 40]; //O array só vai permitir numeros
  
  // Lista com tipos mistos (usando Union Types)
  let misto: (number | string)[] = [1, "dois", 3, "quatro"];
  
  let fruits: string[] = ["Maçã", "Banana"];
  fruits.push("Laranja"); // Adiciona no final
  fruits.unshift("Uva"); // Adiciona no início
  
  
  fruits.pop(); // Remove o último elemento ("Laranja")
  fruits.shift(); // Remove o primeiro elemento ("Uva")
  
  
  console.log(fruits[0]); // "Maçã"
  console.log(fruits.length); // 3