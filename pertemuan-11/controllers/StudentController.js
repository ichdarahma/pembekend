// Import data students
const students = require('../data/students')

class StudentController {

    index(req, res) {
        // Response format
        const data = {
            message: "Get All Students",
            data: [...students]
        }
        // Set response to JSON
        res.json(data)
    }

    store(req, res) {
        // Get data post
        const { nama } = req.body

        // Push new student to students array
        students.push(nama)

        // Response format
        const data = {
            message: `Add student data: ${nama}`,
            data: [...students]
        }
        // Set response to JSON
        res.json(data)
    }

    update(req, res) {
        // Get params
        const { id } = req.params
        // Get data post
        const { nama } = req.body

        // Update student with id (index)
        students[id] = nama

        // Response format
        const data = {
            message: `Edit student with id ${id}: ${nama}`,
            data: [...students]
        }
        // Set response to JSON
        res.json(data)
    }

    destroy(req, res) {
        // Get params
        const { id } = req.params

        // Splice student with id (index)
        students.splice(id, 1)

        // Response format
        const data = {
            message: `Delete student with id ${id}`,
            data: [...students]
        }
        // Set response to JSON
        res.json(data)
    }

}

module.exports = new StudentController()