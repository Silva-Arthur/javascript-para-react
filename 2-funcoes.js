function ola() {
    return 'Olá!'
}

console.log(ola())

function olaPessoa(nome) {
    return `Olá ${nome}!` // interpolação de strings, usando ` `
}

console.log(olaPessoa('Arthur'));

//Arrow functions
const ola2 = () => {
    return 'Olá novamente!'
}

console.log(ola2());

const olaPessoa2 = (nome, idade) => {
    return `Olá ${nome}, sua idade é ${idade}!`
}

const olaPessoa3 = nome => `Olá novamente, de novo, ${nome}`

console.log(olaPessoa2('Beatriz',23));

console.log(olaPessoa3('Beatriz'));