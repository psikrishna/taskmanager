const mongoose = require('mongoose');
const log = console.log;

// initialise connection with db
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});