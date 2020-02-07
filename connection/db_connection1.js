const MongoClient = require('mongodb').MongoClient;

var url = process.env.URL
var dbName = process.env.dataBaseName

const state = {
    db : null
};

//CosmosDb connection
MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, client) {
    if(err){
        console.log("Connection error to server");
    }else{
        console.log("Connected successfully to server");
        state.db = client.db(dbName); 
        // client.close();
    }
});

// returns database connection 
const getDB = ()=>{
    return state.db;
}

module.exports = {MongoClient,getDB};