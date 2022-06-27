const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Movies = require('./models/Movies');
require('dotenv').config();

app.use(express.json());
app.use(cors());

const username = 'valesh';
const password = 'pwd1234';

mongoose.connect(
  `mongodb+srv://${username}:${password}@pixcels.rfhmf.mongodb.net/MoviesDB?retryWrites=true&w=majority`
);

app.get('/movies', (req, res) => {
  Movies.find({}, (err, movies) => {
    if (err) {
      res.json(err);
    } else {
      res.json(movies);
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001...');
});
