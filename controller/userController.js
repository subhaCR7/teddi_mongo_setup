// var db = require('../connection/db_connection1')
var userModel = require('../model/userModel')

// var getUsersList = function(req, res){
//     return new Promise(function(resolve, reject) {
//         db.getDB().collection('users').find().toArray((err,documents)=> {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(documents);
//                 // reject('custom error')
//             }
//         })
//     })
// }

var getUsersList = function(req, res){
    return new Promise(function(resolve, reject) {
        userModel.find({})
        .then(doc => {
            resolve(doc);
        })
        .catch(err => {
            reject(err);
        })
    })
}

module.exports = {getUsersList};