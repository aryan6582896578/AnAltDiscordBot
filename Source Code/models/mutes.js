const mongoose = require('mongoose')

const muteSchema = mongoose.Schema({
    Guildid: String,
    Users: String,
    
    })
    
 module.exports = mongoose.model('mutes-testing', muteSchema)