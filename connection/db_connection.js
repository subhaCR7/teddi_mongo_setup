const mongoose = require('mongoose')

// var url = process.env.URL
// var dbName = process.env.dataBaseName

let connectionUrl = 'mongodb://'+process.env.COSMODDB_USER+':'+process.env.COSMOSDB_PASSWORD+'@'+process.env.COSMOSDB_HOST+':'+process.env.COSMOSDB_PORT+'/'+process.env.COSMOSDB_DBNAME+'?ssl=true'
mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

// let db = mongoose.connect("mongodb://"+process.env.COSMOSDB_HOST+":"+process.env.COSMOSDB_PORT+"/"+process.env.COSMOSDB_DBNAME+"?ssl=true&replicaSet=globaldb", {
//   useNewUrlParser: true, 
//   useUnifiedTopology: true ,
//   auth: {
//     user: process.env.COSMODDB_USER,
//     password: process.env.COSMOSDB_PASSWORD
//   }
// })
// .then(() => console.log('Connection to CosmosDB successful'))
// .catch((err) => console.error(err));

module.exports = db;