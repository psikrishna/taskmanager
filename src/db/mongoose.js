const mongoose = require('mongoose');
const log = console.log;

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const User = mongoose.model('User', {
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
});

// const newUser = new User({
//     name: 'sai',
//     age: 'vingt-une'
// });

// newUser.save().then((newUser) => {
//     log(newUser);
// }).catch((error) => {
//     log('Error!', error);
// });

const Task = mongoose.model('Task', {
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
    },
});

const newTask = new Task({
    description: 'learn mongoose',
    completed: false,
});

newTask.save().then((newTask) => {
    log(newTask);
}).catch((error) => {
    log(error);
});