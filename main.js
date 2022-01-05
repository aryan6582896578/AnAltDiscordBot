const Discord = { Client, Collection, Intents } = require('discord.js');
require('dotenv').config();


const client = new Client({ intents: [ Intents.FLAGS.GUILDS , Intents.FLAGS.GUILD_MESSAGES , Intents.FLAGS.GUILD_MEMBERS] , partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const mongoose = require('mongoose');
mongoose.connect(process.env.database,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(() => {
    console.log("AnAlt Connected To AnAlt03 DataBase");
})
.catch((err) => {
    console.log(err);
});


const AutoPoster = require('topgg-autoposter')

const ap = AutoPoster('top.gg token', client)
ap.on('posted', () => { 
    console.log('Info Updated On Top.gg')
  })
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.slash = new Discord.Collection();

['commandhandler','eventhandler','slashhd'].forEach(handler =>{
    require(`./handlers/${handler}`)(client,Discord);
})
client.login(process.env.altclassified);




