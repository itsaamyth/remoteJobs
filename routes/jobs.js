const express = require('express')
var router = express.Router()
const {getJobs} = require('../controllers/jobs')
const {checkAuth,errorHandler} = require('../controllers/candidate')


router.post('/jobs',checkAuth,getJobs)


module.exports = router