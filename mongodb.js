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

    db.collection('users').updateOne({
        _id: new ObjectID('5ef8bd32161e5c4f04cead13'),
    }, {
        $set: {
            name: 'ghost:)g',
        }
    }).then((result) => {
        log(result)
    }).catch((error) => {
        // log(chalk.red.bold.inverse(error));
        log(error)
    });
});