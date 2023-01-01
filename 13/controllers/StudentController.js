// Import student model
const Student = require('../models/Student')

class StudentController {

    async index(req, res) {
        // Call static method all()
        const students = await Student.all()

        // Response format
        const data = {
            message: students.length == 0 ? "Student Resource is Emtpy" : "Get All Students",
            data: students
        }
        // Set response to JSON
        return res.status(200).json(data)
    }

    async store(req, res) {
        // Get data post
        const { nama, nim, email, jurusan } = req.body

        // Set value
        const value = {
            nama,
            nim,
            email,
            jurusan
        }

        try {
            // Call static method create()
            const create = await Student.create(value)

            // Response format
            const data = {
                message: "Add new student data",
                data: { id: create.insertId, ...value }
            }
            // Set response to JSON
            return res.status(201).json(data)
        } catch (error) {
            return res.status(400).json({ message: error.sqlMessage })
        }
    }

    async show(req, res) {
        // Get params
        const { id } = req.params

        // Call static method find()
        const student = await Student.find(id)

        const data = {
            message: student ? `Get student with id: ${id}` : `Student Not Found`,
            data: student
        }
        // // Set response to JSON
        return res.status(student ? 200 : 404).json(data)
    }

    async update(req, res) {
        // Get params
        const { id } = req.params

        // Check student exists
        // Call static method find()
        const student = await Student.find(id)
        if (!student) return res.status(404).json({ message: "Student Not Found" })

        // Get data post
        const { nama, nim, email, jurusan } = req.body

        // Set value
        const value = {
            nama: nama || student.nama,
            nim: nim || student.nim,
            email: email || student.email,
            jurusan: jurusan || student.jurusan
        }

        try {
            // Call static method update()
            await Student.update(value, student.id)

            // Response format
            const data = {
                message: `Edit student with id: ${id}`,
                data: { id, ...value }
            }
            // Set response to JSON
            return res.status(200).json(data)
        } catch (error) {
            // Set response to JSON
            return res.status(400).json({ message: error })
        }

    }

    async destroy(req, res) {
        // Get params
        const { id } = req.params

        // Check student exists
        // Call static method find()
        const student = await Student.find(id)
        if (!student) return res.status(404).json({ message: "Student Not Found" })

        try {
            // Call static method delete()
            await Student.delete(id)

            // Response format
            const data = {
                message: `Delete student with id ${id}`
            }
            // Set response to JSON
            return res.status(200).json(data)
        } catch (error) {
            // Set response to JSON
            return res.status(400).json({ message: error })
        }
    }

}

module.exports = new StudentController()