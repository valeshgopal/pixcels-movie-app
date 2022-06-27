const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({});

const MovieModel = mongoose.model('Movie', MovieSchema);

module.exports = MovieModel;
