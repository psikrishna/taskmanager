const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const log = console.log

const app = express()
const port = process.env.PORT || 3000

// this section is like playground for testing purposes
const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('file must be a doc or docx'))
        }
        cb(undefined, true)
        // cb(undefined,false)
    }
})
app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

// automatically parse incoming json to be used as an object
app.use(express.json())

// using serparate routes for user and task related activities
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    log('Server is up on port' + port)
})
