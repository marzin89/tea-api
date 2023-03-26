const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const teaSchema = new Schema({
    name: {
        type:     String,
        required: true,
    },
    type: {
        type:     String,
        required: true,
    },
    origin: {
        type:     String,
        required: true,
    },
    price: {
        type:     Number,
        required: true,
    },
    description: {
        type:     Array,
        required: true,
    },
});

const tea      = mongoose.model('teas', teaSchema);
module.exports = tea;