// Import exoress
const express = require('express')
// Import StudentController
const StudentController = require('../controllers/StudentController')

// Init object of router
const router = express.Router()

/**
 * Make routing
 * 
 * @param Endpoint (string)
 * @param Callback (function)
 */
router.get('/', (req, res) => {
    res.send('Hello Express')
})

router.get('/students', StudentController.index)
router.post('/students', StudentController.store)
router.put('/students/:id', StudentController.update)
router.delete('/students/:id', StudentController.destroy)


// Export router
module.exports = router
