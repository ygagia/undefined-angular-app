const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Get all posts
router.get('/', (req, res) => {
    Post.find()
        .then((posts) => {
            res.json(posts);
        })
        .catch((err) => {
            res.json(err);
        })
});

// Get single post by slug
router.get('/:slug', (req, res) => {
    const slug = req.params.slug;

    Post.findOne({slug})
        .then((post) => {
            res.json(post);
        })
        .catch((err) => {
            res.json(err);
        })
});

// Add a new post
router.post('/add', (req, res) => {
    const post = new Post({
        title: req.body.title,
        slug: req.body.slug,
        author: req.body.author,
        description: req.body.description
    });

    Post.create(post)
        .then((post) => {
            res.json(post);
        })
        .catch((err) => {
            res.json(err);
        })
});

router.put('/update/:slug', (req, res) => {
    const slug = req.params.slug;

    Post.findOneAndUpdate({slug}, req.body)
        .then((post) => {
            res.json(post);
        })
        .catch((err) => {
            res.json(err);
        })
});

router.delete('/delete/:slug', (req, res) => {
    const slug = req.params.slug;

    Post.findOneAndRemove({slug})
        .then((post) => {
            res.json(post);
        })
        .catch((err) => {
            res.json(err);
        })
});

module.exports = router;