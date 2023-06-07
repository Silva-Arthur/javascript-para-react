/**
 * 
 * ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
 * 
*/

const frutas = ['laranja','banana','uva']

let [fruta1, fruta2, fruta3, fruta4] = frutas // array sintaxe de array

console.log(fruta1)
console.log(fruta2)
console.log(fruta3)
console.log(fruta4)

console.log('\n')

const pessoa = {
    nome: 'Arthur',
    idade: 26,
    pais: 'Brasil',
    idioma: 'Português'
}

let {idade, idioma} = pessoa // objeto sintaxe de objeto

console.log(idade)
console.log(idioma)

const localidade = (pessoa)  => `Você mora no ${pessoa.pais} e fala ${pessoa.idioma}`
console.log(localidade(pessoa))

const localidadeSegundaForma = ({pais, idioma})  => `Você mora no ${pais} e fala ${idioma}` // ooutra forma de fazer desestruturação em um objeto
console.log(localidadeSegundaForma(pessoa))