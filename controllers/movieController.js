
const MovieModel = require('../models/movieModel');
const xml = require('xml-js');

function getAllVideos(req, res) {
  
  MovieModel.find({}, function(err, movies) {
    res.send(movies);
  });
}




