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
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"');
            }
        }
    }
});

// add user
// const newUser = new User({
//     name: 'test6',
//     age: 21,
//     email: 'test6@email.com',
//     password: 'PaSsWoRdd',
// });

// newUser.save().then((newUser) => {
//     log(newUser);
// }).catch((error) => {
//     log('Error!', error);
// });

// task table
const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

// add task
const newTask = new Task({
    description: 'learn mongoose + validator',
    completed: true,
});

newTask.save().then((newTask) => {
    log(newTask);
}).catch((error) => {
    log(error);
});