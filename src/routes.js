const express = require('express');
const routes = express.Router();

// Controllers
const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

// Routes
routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);
routes.post('/likes/:id', LikeController.store);

module.exports = routes;