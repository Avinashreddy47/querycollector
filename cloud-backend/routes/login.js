var express = require('express');
var router = express.Router();
app = express();
/*var users = [
  {
    firstname: 'firstname',
    lastname: 'lastname',
    email:'abc@gmail.com',
    company:'company',
    query: 'query',

  }
]
*/
router.post('/',function(req,res,next){
  let result = req.body;
  const email = result.email;
  const firstname = result.name;
  const lastname = result.last;
  const company = result.message;
  const query = result.query;
  db.query(
	 "INSERT INTO queries(firstname,lastname,email,company,query) VALUES (?,?,?,?,?)",
	 [firstname,lastname,email,company,query],
	  (err,resu)=>{
	     if(err){
		res.send({err: err});
	     }
	     else {
        	res.send({ message:"logged in sucessfully",resu});
      	}
       

  });
  // res.send("hello");
  //console.log(req.body);
 /* 	if(result){
    		if(result.email!='' && result.query!='' && result.firstname!='' && result.lastname!='' && result.company!=''){
     	res.status(200).send({
      	message: "The query is sucessfully taken",
    	})
  	}
  	else{
    	res.status(200).send({
      	message:"Enter all the feilds correctly"
    	})
 	 }
 	 }
  else{
    res.status(200).send({
      message:"please enter the details again",

    })
 }*/
//next();
});

module.exports = router;
