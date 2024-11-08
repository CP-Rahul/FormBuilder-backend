const mongoose = require('mongoose');
const ServerConfig  = require('./server-config');

async function dbConnect() {
    try {
        await mongoose.connect(ServerConfig.MONGODBURL);
        console.log('connected to the database')
    } catch (error) {
        console.log('can\'t connect to the database', error);
    }
}

module.exports = dbConnect;