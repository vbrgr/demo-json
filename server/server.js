var express = require('express');
var bodyparser = require('body-parser');
const path = require('path');
var multer = require('multer');
var app = express();
var router = express.Router();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

/**Mysql Connection */

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});



var fetch = require("./menu");
app.use("/api/menu/", fetch);
var put = require("./menu");
app.use("/api/menu/update", put);
var form = require("./form");
app.use("/api/form/", form);

app.listen(3000);
console.log("Server Listening the port no.3000");