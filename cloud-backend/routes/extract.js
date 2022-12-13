var express = require('express');
var router = express.Router();
app = express();
var fs = require('fs');
router.get('/',function(req,res,next){
  db.query('select * from queries', function(err, results, fields) {
    if(err) throw err;
     console.log(JSON.stringify(results));
      fs.writeFile('table.json', JSON.stringify(results), function (err) {

      console.log('Saved!');
    });

    db.end();   
});
});
module.exports = router;
