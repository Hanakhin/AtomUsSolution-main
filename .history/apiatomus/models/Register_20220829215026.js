const mongoose = require('mongoose');

const RegisterSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    admin: Boolean
})

module.exports = mongoose.model('register', UserSchema);