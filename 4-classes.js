class Animal {
    constructor(f) {
        this.familia = f
    }

    andar = () => {
        return 'andando...'
    }
}

class Cachorro extends Animal{
    constructor(n, i) {
        super('Carnívoros')
        this.nome = n
        this.idade = i

    }

    latir = () => `${this.nome}: au au`
}

let rex = new Cachorro('Bidu',2)
console.log(rex)
console.log(rex.latir())
console.log(rex.andar())
console.log(rex.familia)

let florzinha = new Cachorro('Florzinha',2)
console.log(florzinha)
console.log(florzinha.latir())