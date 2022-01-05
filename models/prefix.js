
const mongoose = require('mongoose');

const PrefixSchema = new mongoose.Schema({
GuildId: {
    type: String,
    required: true,
},
prefix: {
    type: String,
    
},

});


 module.exports = mongoose.model('prefixdata', PrefixSchema);
 