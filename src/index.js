const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const log = console.log;

const app = express();
const port = process.env.PORT || 3000;

// automatically parse incoming json to be used as an object
app.use(express.json());

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

app.listen(port, () => {
    log('Server is up on port' + port)
});
