const mongoose = require('mongoose')
const log = console.log

// initialise connection with db
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})