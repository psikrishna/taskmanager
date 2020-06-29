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
    // log(chalk.green.inverse.bold('connected!'));
    const db = client.db(databaseName);
    // db.collection('users').findOne({ name: 'Sai' }, (error, user) => {
    //     if (error) {
    //         log(chalk.red.bold.inverse('unable to fetch user'));
    //     }
    //     log(user);
    // });
    db.collection('users').find({ age: 21 }).toArray((error, users) => {
        log(users)
    });
});