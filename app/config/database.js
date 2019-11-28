// config/database.js
const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL || 'localhost';
const MONGO_DB = process.env.MONGO_DB || 'testdb';
 mongoose.Promise = global.Promise;
 mongoose.set('bufferCommands', false);
 mongoose.connect(`mongodb://${MONGO_URL}/${MONGO_DB}`,{
     useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    }).then(success => {
        console.log('[OK] Successfully connected to the database!');
  		    },err => {
  		        console.log('[ERROR] Error connecting to the database!');
		    });
module.exports = mongoose 