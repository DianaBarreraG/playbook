console.log("Ejemplo 8: Métodos static para escribir métodos en una clase sin instanciar algún objeto")
class Toolbox {
  static getMostUsefulTools(){
    return ["Command line", "git", "Text Editor"]
  }
}

console.log("Métodos static:")
console.log(Toolbox.getMostUsefulTools())
