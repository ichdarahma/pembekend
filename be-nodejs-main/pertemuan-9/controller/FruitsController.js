// Import data fruits
const fruits = require('../data/Fruits')

const index = () => {
    console.log('Fruits list')
    fruits.map((fruit) => console.log(fruit))
}

const store = (fruit) => {
    console.log('\nAdd new fruit to fruits list')
    fruits.push(fruit)
    index()
}

const update = (i, fruit) => {
    console.log(`\nUpdate fruit where index = ${i}`)
    fruits[i] = fruit
    index()
}

const destroy = (i) => {
    console.log(`\nDelete fruit where index = ${i}`)
    fruits.splice(i, 1)
    index()
}

module.exports = { index, store, update, destroy }