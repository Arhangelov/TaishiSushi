const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SECRET, SALT_ROUNDS } = require('../config/config');

const userScheme = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 9,
    },

    address: {
        type: String,
        required: true,
    },

    cart: [],
    purchaseHistory: []

});

userScheme.pre('save', function(next) {
    bcrypt.genSalt(SALT_ROUNDS)
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hash => {
            this.password = hash;
            next();
        });
});

module.exports = mongoose.model('User', userScheme)