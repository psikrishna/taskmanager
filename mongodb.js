const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const chalk = require('chalk');
const log = console.log;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return log(chalk.red.bold.inverse('unable to connect to database'));
    }
    // log(chalk.green.inverse.bold('connected!'));
    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     name: 'Sai',
    //     age: '21',
    // }, (error, result) => {
    //     if (error) {
    //         return log(chalk.red.bold.inverse('unable to insert user'));
    //     }
    //     log(result.ops);
    // });
    db.collection('users').insertMany([
        {
            name: 'dodo',
            age: '21',
        },
        {
            name: 'pelican',
            age: '16'
        }
    ]);
});