const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    apartmentNumber: Number,
    apartmentSize: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;
