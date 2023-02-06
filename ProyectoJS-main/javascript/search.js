const listaDeMonstruos = []

const numerosId = [ 1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19,20]

const numerosOrdenados = [...numerosId].sort ((a, b) => {
    return a - b
})

const numeroBuscado = numerosId.find ( (element) => {
    return element === 4
})
console.log (numeroBuscado)

const arrFiltrado = numerosId.filter ((curr) => {
    return curr % 2 === 0
})
console.log (arrFiltrado)

console.log (listaDeMonstruos.some ((elemento) => {
    return elemento.armorClass > 15
}))

const nuevoArray = arrFiltrado

listaDeMonstruos.sort ((a, b) => {
    if (a < b){
        return 1
    } else if (a > b) {
        return -1
    } else {
        return 0
    }
})