const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const log = console.log

const app = express()

// automatically parse incoming json to be used as an object
app.use(express.json())

// using serparate routes for user and task related activities
app.use(userRouter)
app.use(taskRouter)

module.exports = app