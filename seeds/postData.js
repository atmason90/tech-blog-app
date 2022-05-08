const { Post } = require('../models');

const posts = [
    {
        'post_title': 'MVC',
        'post_body': 'MVC is a difficult concept to learn at first, but once you understand the concept it will save you a lot of time!',
        'user_id': 1
    },
    {
        'post_title': 'handlebars',
        'post_body': 'It is funny that the icon for handlebars is a little mustache :)',
        'user_id': 2
    },
    {
        'post_title': 'ABC',
        'post_body': 'I Always Be Coding',
        'user_id': 3
    }
];

const seedPost = () => Post.bulkCreate(posts);

module.exports = seedPost;