const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    author: String,
    description: String,
    date_created: {
        type: Date,
        default: Date.now
    }
});

const Post = module.exports = mongoose.model('Post', postSchema);

module.exports.getPosts = (callback) => {
    Post.find(callback);
}

module.exports.addPost = (post, callback) => {
    Post.create(post, callback);
}

module.exports.updatePost = (post_id, callback) => {
    var query = {_id: post_id};
    var update = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
    }

    post.findByIdAndUpdate(query, update, {new: true}, (err, callback) => {
        if(err) {
            throw err;
        }
        res.send(callback);
    });
}