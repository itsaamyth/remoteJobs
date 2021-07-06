const candidate = require("../models/candidate");
const jobs = require("../models/jobs");
const mongoose = require("mongoose");
var jwt = require('jsonwebtoken')
var expressJwt = require('express-jwt')
var bcrypt = require('bcryptjs') //password Encrypter





exports.register=(req,res)=>{
    var name = req.body.name
    var userid = req.body.userid
    var password = req.body.password
    
    password = bcrypt.hashSync(req.body.password,10) //password Encrypter
    candidateRegister = new candidate({
        name : name,
        userid : userid,
        password : password
    })
    candidateRegister.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err:"Not able to save user in the DB"
            })
        }
        res.json({
            message:"Candidate Added Successfully",
            name:user.name,
            userid:user.userid,
            id:user._id
        })
    })
}

exports.login=(req,res)=>{
   var userid = req.body.userid
   var password = req.body.password
   var checkUser = candidate.findOne({userid:userid}) 
   checkUser.exec((err,data)=>{
       if(!data){
        res.status(404).json({
            message:"User not Found . Auth Failed !!",})
        }

        else{
       var objId = data._id
       var encryPassword = data.password
       if(bcrypt.compareSync(password,encryPassword)){
        var token = jwt.sign({
            userid:userid,
            objid:objId} , 
                 process.env.SECRET,
                 { expiresIn:"2700s"});

        res.status(201).json({
            message:"User logged in Succesfully",
            userid:userid,
            token:token
        })        
       }
       else{
        res.status(404).json({
            message:"Auth Failed",
        })  
       }
    }
   })
}

exports.checkAuth = (req,res,next)=>{
    var headerToken = req.headers
    var loggedIn = false
        try{
            var token  = req.headers.authorization.split(" ")[1];
            var decode = jwt.verify(token, process.env.SECRET)
            req.userData = decode
        }
        catch(error){
            res.status(401).json({
                error:"Invalid Token",
                loggedIn:false
            })
        }
        next()
}






