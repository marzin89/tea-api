const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = Schema({
    name: {
        type:     String,
        required: true,
    },
    rating: {
        type:     Number,
        required: true,
    },
});

const rating   = mongoose.model('ratings', ratingSchema);
module.exports = rating;