var express = require('express');
var router = express.Router();

var userController = require('../controller/userController')

router.get('/getUsersList',(req,res)=>{
  userController.getUsersList(req,res).then(success =>{
    res.send(success)
  })
  .catch((error) => {
    res.send({ "status": "error", "message": error });
  })
});

module.exports = router;
