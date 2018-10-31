const mongoose = require('mongoose');

const VampireSchema = new mongoose.Schema ({
    name: String,
    hair_color: String,
    eye_color: String,
    dob: Date,
    loves: [String],
    locatioin: String,
    gender: String,
    victims: Number
})

module.exports = mongoose.model('Vampire', VampireSchema);
