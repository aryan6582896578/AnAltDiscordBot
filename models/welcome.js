const mongoose = require('mongoose')

const wel = mongoose.Schema({
    GuildId: String,
ChannelId: String,

})

module.exports = mongoose.model('joinwelcome', wel)