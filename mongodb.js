// CRUD => create read update delete
const chalk = require('chalk');
const log = console.log;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
log(id);
log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return log(chalk.red.bold.inverse('unable to connect to database'));
    }
    const db = client.db(databaseName);
    db.collection('tasks').updateMany({
        completed: false,
    }, {
        $set: {
            completed: true,
        }
    }).then((result) => {
        log(result.modifiedCount);
    }).catch((error) => {
        log(error);
    });
});