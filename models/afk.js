const mongoose = require('mongoose');

const AFKSchema = new mongoose.Schema({
    UserID: String,
    Reason: String
});

 module.exports = mongoose.model('Afkdata', AFKSchema);