var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var cors = require('cors')
 
var app = express()
app.use(cors())
app.listen(8080,function(){
    console.log("server started")
})
 
app.post('/profile', upload.single('Pic'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})