const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res, next) => {
    Post.getPosts((err, posts) => {
        if(err){
            throw err;
        } else {
            res.json(posts);
        }
    });
});

router.post('/add', (req, res, next) => {
    var post = new Post({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
    });

    Post.addPost(post, (err) => {
        if(err){
            throw err;
        } else {
            res.json(post);
        }
    });
});

router.put('/update/:id', (req, res, next) => {
    var post = new Post({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
    });

    Post.updatePost(id, (err) => {
        if(err){
            throw err;
        } else {
            res.json(post);
        }
    });
});

module.exports = router;