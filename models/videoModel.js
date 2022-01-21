var mongoose = require('mongoose');


var movieSchema = new mongoose.Schema({
  titre: mongoose.Schema.Types.String,
  desc: mongoose.Schema.Types.String,
  miniature: mongoose.Schema.Types.String
});


module.exports = mongoose.model('Movie', movieSchema);