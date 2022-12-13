

var express = require('express');
var router = express.Router();

var users = [
  {
    firstname: 'firstname',
    lastname: 'lastname',
    email:'abc@gmail.com',
    company:'company',
    query: 'query',

  }
]

/* GET home page. */
 router.get('/', function(req, res, next) {
   res.send("welcome to the server");
 });



module.exports = router;
