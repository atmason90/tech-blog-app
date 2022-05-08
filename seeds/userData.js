const { User } = require('../models');

const users = [
    {
        'username': 'Andrew1990',
        'password': 'password1' 
    },
    {
        'username': 'Adam1988',
        'password': 'password2'
    },
    {
        'username': 'marianne1957',
        'password': 'password3'
    }
];

const seedUser = () => User.bulkCreate(users, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;