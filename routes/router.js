var express = require('express')
const path = require('path')


var router = express.Router()

router.get('/users', (req, res, next) => {

    res.sendFile(path.join(__dirname, '../', 'views', 'users.html'))

})

router.get('/', (req, res, next) => {
    
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'))

})

module.exports = router