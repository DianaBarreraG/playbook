console.log("Ejemplo 9: Uso del reduce para calcular la suma de los elementos de una lista")

const numbers9 = [1, 2, 3, 4, 5]
console.log(numbers9)
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log("Suma de los elementos de una lista:")
console.log(result_of_reduce)
