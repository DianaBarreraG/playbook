console.log("Ejemplo 8: Filtrar una lista por condicional")

const scores = [
  { name: 'A', score: 95 },
  { name: 'L', score: 98 },
  { name: 'M', score: 80 },
  { name: 'E', score: 50 },
  { name: 'R', score: 85 },
  { name: 'J', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log("Filtrando elementos por score:")
console.log(scoresGreaterEighty)
