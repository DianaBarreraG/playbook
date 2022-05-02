console.log("5. Creación de un objeto con método que recibe parámetros")

const myPet = {
  name: "Woopa",
  sayHelloToMyPet: function(yourPet){
    console.log(`${this.name} say's hello to ${yourPet}`)
  }
}

console.log("Objeto que recibe parámetros:")
myPet.sayHelloToMyPet("Archie")
