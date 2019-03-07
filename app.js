var express = require('express')
var app = express()
const path = require('path')

 const router = require('./routes/router')

app.use(router)
app.use(express.static(path.join(__dirname, 'public')))



app.use('/', function (req, res) {
  res.status(404).send('Error 404')
})
 
app.listen(3000)