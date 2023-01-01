// Import database connection
const db = require('../config/database')

// Creating student class model
class Student {

    /**
     * @static all()
     * 
     * @callback callback
     */
    // static all(callback) {
    //     const query = "SELECT * FROM students"

    //     db.query(query, (err, results) => {
    //         callback(results)
    //     })
    // }

    /**
     * Get all student
     * 
     * @returns Data Students
     */
    static all() {
        // Return Promise as asyncronus solution
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM students"

            db.query(query, (err, result) => {
                resolve(result)
            })
        })
    }

    /**
     * Insert new student
     * 
     * @param {object} data
     * @returns Statistics
     */
    static create(data) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO students SET ?";

            db.query(query, data, (err, result) => {
                if (err) reject(err)
                resolve(result)
            })
        });
    }

    /**
     * Get student based on id
     * 
     * @param {integer} id 
     * @returns Data student
     */
    static find(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM students where id=? LIMIT 1"

            db.query(query, id, (err, result) => {
                resolve(...result)
            })
        })
    }

    /**
     * Update student data
     * 
     * @param {object} data 
     * @param {integer} id 
     * @returns Statistics
     */
    static update(data, id) {
        return new Promise((resolve, reject) => {
            const query = "UPDATE students SET ? where id=?"

            db.query(query, [data, id], (err, result) => {
                if (err) reject(err)
                resolve(result)
            })
        })
    }

    /**
     * Delete student data
     * 
     * @param {integer} id 
     * @returns statistics
     */
    static delete(id) {
        return new Promise((resolve, reject) => {
            const query = "DELETE FROM students where id=?"

            db.query(query, id, (err, result) => {
                if (err) reject(err)
                resolve(result)
            })
        })
    }
}

module.exports = Student