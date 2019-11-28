const express = require('express');
const cors = require('cors'); // We will use CORS to enable cross origin domain requests.
const mongoose = require('./config/database.js');
const Schema = mongoose.Schema;
const port = process.env.APPPORT || 8100;
const app = express();
const collection = process.env.COLNAME || 'samplecol'
const schemaName = new Schema({
    timestamp: Number
}, {
    collection: `${collection}`
});

const Model = mongoose.model('Model', schemaName);


app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});
app.get('/', cors(), function(req, res) {
    const query = req.params.query;

    const savedata = new Model({
        'timestamp': Math.floor(Date.now() / 1000) // Time of save the data in unix timestamp format
    }).save(function(err, result) {
        if (err) throw err;

        if(result) {
            res.json(result)
        }
    })
})