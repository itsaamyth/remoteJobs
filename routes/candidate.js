const express = require('express')
var router = express.Router()
const {register,login} = require('../controllers/candidate')
var jwt = require('jsonwebtoken')



router.post('/register',register)
router.post('/login',login)


module.exports = router