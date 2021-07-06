const candidate = require("../models/candidate");
const jobs = require("../models/jobs");
const mongoose = require("mongoose");


exports.getJobs = (req, res) => {
  var perPage = 10
  , page = req.param('page')
    jobs.find().limit(perPage).skip(perPage * (page-1)).exec((err, jobs) => {
      if (err) {
        return res.status(400).json({
          error: "No Jobs Found",
        });
      }
      res.json(jobs);
    });
  };