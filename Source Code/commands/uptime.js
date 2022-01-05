const { MessageActionRow, MessageButton } = require('discord.js');
const { Permissions } = require(`discord.js`);
module.exports = {
    name: 'uptime', 
    aliases: ['up','analtup'],
    description: 'up time for  bot',
    async execute(client, message  , Discord , args) {

        if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `up line 9`)}) 
   
 

const prettyMilliseconds = require("pretty-ms");
const newEmbed = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setTitle(' Uptime')
.setDescription(` ${prettyMilliseconds(client.uptime)}`)
.setFooter('@AnAlt for support');
message.channel.send({ embeds: [newEmbed] }).catch(error => {console.log(error , `up line 20`)}) ;  










    }}