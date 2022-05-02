console.log("4. Creación de un objeto con métodos")
const pet = {
    name: "Archie",
    sayHello: function () {
        console.log(`${this.name} te saluda en español`)
    }
}

console.log("Objeto con métodos:")
pet.sayHello()
