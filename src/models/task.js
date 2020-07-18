const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const log = console.log

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

// middleware

const Task = mongoose.model('Task', taskSchema)

module.exports = Task