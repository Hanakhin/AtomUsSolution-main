const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    admin: Boolean
})

module.exports = mongoose.model('User', UserSchema);