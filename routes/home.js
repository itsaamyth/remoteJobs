const express = require('express')
var router = express.Router()


router.get('/',(req,res)=>{
    res.send("Welcome to Remote Jobs API")
})


module.exports = router