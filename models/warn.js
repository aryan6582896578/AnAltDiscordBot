const mongoose = require('mongoose')

const warnSchema = mongoose.Schema({
guildid: String,
user: String,
content: Array
})

module.exports = mongoose.model('warnings', warnSchema)