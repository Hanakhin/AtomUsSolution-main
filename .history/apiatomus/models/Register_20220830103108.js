const mongoose = require('mongoose');

const RegisterSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
})

module.exports = mongoose.model('Register', RegisterSchema);