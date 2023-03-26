const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type:     Number,
        required: true,
        unique:   true,
    },
    username: {
        type:     String,
        required: true,
        unique:   true,
    },
    password: {
        type:     String,
        required: true,
        unique:   true,
    },
    firstName: {
        type:     String,
        required: true,
    },
    lastName: {
        type:     String,
        required: true,
    },
    email: {
        type:     String,
        required: true,
    }
});

const user     = mongoose.model('users', userSchema);
module.exports = user;
