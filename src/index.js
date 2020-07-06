const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const log = console.log;

const app = express();
const port = process.env.PORT || 3000;

// automatically parse incoming json to be used as an object
app.use(express.json());

// =================== C of CRUD ===================

// normally we use get to access the route using get http, but we are trying to use post for resource creation therefore we use app.post
// call to set up resource creation endpoint (user)
app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
});

// call to set up resource creation endpoint (task)
app.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
});

// =================== R of CRUD ===================

// route handler for fetching multiple users
// find will get all the data, though we can use key value pair in paranthesis
app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send()
    })
});

// route for returning individual users by id
app.get('/users/:id', (req, res) => {
    const _id = req.params.id
    // findOne => to be used if searching by any other value say email etc
    // findById to find by id
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
        res.status(500).send()
    });
});

// =================== U of CRUD ===================



// =================== D of CRUD ===================



// =================== CRUD Over ===================

app.listen(port, () => {
    log('Server is up on port' + port)
});