const mongoose = require('mongoose');
const validator = require('validator');
const log = console.log;

// initialise connection with db
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

// user table
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('age must be a positive number');
            }
        },
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('enail invalid');
            }
        }
    }
});

const newUser = new User({
    name: '    test4 ',
    age: 21,
    email: '  test4@email.com    ',
});

newUser.save().then((newUser) => {
    log(newUser);
}).catch((error) => {
    log('Error!', error);
});

// task table
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