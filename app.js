const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const posts = require('./routes/posts');

mongoose.connect('mongodb://localhost:27017/undefapp');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to db successfully');
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/posts', posts);

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(1234, () => {
    console.log('Server started on port 1234');
});