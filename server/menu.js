var express = require('express');
var router = express.Router();

/**Mysql Connection */
router.get("/", (req,res) => {
console.log(req);
});
router.post("/update",function(req,res){
    console.log(req.body);
});
module.exports = router;