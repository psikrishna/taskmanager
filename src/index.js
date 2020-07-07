const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const log = console.log

const app = express()
const port = process.env.PORT || 3000

// automatically parse incoming json to be used as an object
app.use(express.json())

// =================== C of CRUD ===================

// normally we use get to access the route using get http, but we are trying to use post for resource creation therefore we use app.post
// call to set up resource creation endpoint (user)
app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// call to set up resource creation endpoint (task)
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

// =================== R of CRUD ===================

// route handler for fetching multiple users
// find will get all the data, though we can use key value pair in paranthesis
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
});

// route for returning individual users by id
app.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    // findOne => to be used if searching by any other value say email etc
    // findById to find by id
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
});

// route for returning multiple tasks
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send()
    }
});

// route for returning single task accessed by id
app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
});

// =================== U of CRUD ===================



// =================== D of CRUD ===================



// =================== CRUD Over ===================

app.listen(port, () => {
    log('Server is up on port' + port)
});
