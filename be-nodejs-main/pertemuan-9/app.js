// Inport FrtuitsController w/ destructing object
const { index, store, update, destroy } = require('./controller/FruitsController')

const main = () => {
    index()
    store('Melon')
    update(1, 'Manggo')
    destroy(3)
}

main()