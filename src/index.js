const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const log = console.log

const app = express()
const port = process.env.PORT || 3000

// automatically parse incoming json to be used as an object
app.use(express.json())

// using serparate routes for user and task related activities
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    log('Server is up on port: ' + port)
})
