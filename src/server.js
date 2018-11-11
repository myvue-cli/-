const express = require("express"); 
const app = express(); 
const fs = require("fs");  

var bodyParser = require('body-parser') 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(8000)
app.get('/',function(req, res){ 
	res.send("首页");
})