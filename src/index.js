const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const log = console.log;

const app = express();
const port = process.env.PORT || 3000;

// automatically parse incoming json to be used as an object
app.use(express.json());

// normally we use get to access the route using get http, but we are trying to use post for resource creation therefore we use app.post

app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
});



app.listen(port, () => {
    log('Server is up on port' + port)
});
