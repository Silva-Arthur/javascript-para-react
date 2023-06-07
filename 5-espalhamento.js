/**
 * 
 * SPREAD
 * 
*/


const numeros = [1,2,3,4]

const novosNumeros = [...numeros, 5] // spread = cria uma cópia de um array ou de um objeto sem criar uma referência na memória, alem disso utiliza um push para inserir o numero 5, porém esse segundo argumento é opcional

console.log(numeros)
console.log(novosNumeros)

const bidu = {
    nome: 'Bidu'
}

const florzinha = {...bidu, idade: 2, familia: 'Carnívora'} // cópia usando spread e além disso adiciona novos elementos ao objeto

florzinha.nome = 'florzinha'

console.log(bidu)
console.log(florzinha)

/**
 * 
 * REST OPERATOR
 * 
*/

const somar = (...numeros) => { // o parametro vira um array
    return numeros.reduce((a, b) => a +b , 0) // reduce: varre o array, a partir da posição definida 0, e executa a operação indicada com os elementos A e B
}

console.log(somar(2,3,5))