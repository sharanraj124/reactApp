const express = require('express');
const Router = express.Router();
const API = {};

API.users = require('../controller/user');
API.auth = require('../controller/auth');
API.posts = require('../controller/posts');
API.profile = require('../controller/profile');


Router

    .get('/', function(req, res){
        res.send("App Running......")
    })

    .post('/api/user', API.users.registerUser)
    .get('/api/auth', API.auth.getData)
    .get('/api/posts', API.posts.getData)
    .get('/api/profile', API.profile.getData);

module.exports = Router