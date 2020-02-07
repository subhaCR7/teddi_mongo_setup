var express = require('express');
var router = express.Router();
var db = require('../connection/db_connection')
var userController = require('../controller/userController')

router.post('/addUser', function(req, res, next) {
  if(req.body.name == '' || req.body.name == 'undefined' || req.body.name == null){
    res.send({status:400, msg:'please add user name'});
    return false
  }
  // Insert some documents
  db.getDB().collection('users').insertOne(req.body, function(err, result) {
    if(err){
      console.log('error', err);     
    }
    res.send({status:200, msg:'New user added', userData:result.ops[0]});
  });
});

router.get('/getUsersList',(req,res)=>{
  // get all Todo documents within our todo collection
  // send back to user as json
  userController.getUsersList(req,res).then(success =>{
    res.send(success)
  })
  .catch((error) => {
    res.send({ "status": "error", "message": error });
  })
});

router.get('/lastDocuments', (req, res)=>{
  db.getDB().collection('users').find({}).sort({_id:-1}).limit(1).toArray((err, result)=>{
    if(err)
          console.log(err);
      else{
          res.json(result);
          // res.send(documents);
      }
  })

})

module.exports = router;
