const mongoose = require('mongoose')
const jobsSchema = new mongoose.Schema({
    id :{
        type:Number,
        required:true,
    },
    url:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    company_name:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    tags:{
        type:Array,
        required:true
    },
    job_type:{
        type:String,
        required:true
    },
    publication_date:{
        type:String,
        required:true
    },
    candidate_required_location:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("jobs",jobsSchema)