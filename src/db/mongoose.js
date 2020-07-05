const mongoose = require('mongoose');
const validator = require('validator');
const log = console.log;

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('age must be a positive number');
            }
        },
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('enail invalid');
            }
        }
    }
});

const newUser = new User({
    name: 'test3',
    age: 21,
    email: 'test3@email',
});

newUser.save().then((newUser) => {
    log(newUser);
}).catch((error) => {
    log('Error!', error);
});

const Task = mongoose.model('Task', {
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
    },
});

// const newTask = new Task({
//     description: 'learn mongoose.',
//     completed: false,
// });

// newTask.save().then((newTask) => {
//     log(newTask);
// }).catch((error) => {
//     log(error);
// });