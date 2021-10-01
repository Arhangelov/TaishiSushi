const mongoose = require('mongoose');

const sushiScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: 10
    },

    type: {
        type: String,
        require: true,
    },

    portion: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

}); 

module.exports = mongoose.model('Sushi', sushiScheme);