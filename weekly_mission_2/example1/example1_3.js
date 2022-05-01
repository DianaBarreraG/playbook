console.log("3. Creación de un objeto con diferentes propiedades")

const friend = {
    name: "Archie",
    months: 9,
    color: "White and brown",
    nicknames: [
        "Archito",
        "Moquis"
    ],
    address: {
        zip_code: 50444,
        state: "Edomex",
        country: "Mexico"
    }
}

console.log("Objeto Amigo:")
console.log(friend)
console.log(friend.name)
console.log(friend["address"])
