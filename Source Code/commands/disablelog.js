const wel = require('../models/welcome');
const { Permissions } = require(`discord.js`);
module.exports = {
    name: 'disablelog',
  async execute(client, message  , Discord , args , cmd ){

    if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `dlog line `)})

    const w12 = new Discord.MessageEmbed() 
    .setColor('#0cfcf2')
 .setDescription(`You Dont Have Permission MANAGE_CHANNELS To Run This Command`)
    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return message.channel.send({ embeds: [w12] })

    const channel =  message.channel
    const wel1 = new Discord.MessageEmbed() 
    .setColor('#0cfcf2')
    .setDescription(`Disabled User Join Leave Channel `)




const data = await wel.findOne({
  GuildId: message.guild.id 
});
if (data) {
  await wel.deleteOne({
    GuildId: message.guild.id 
  }).catch(error => {console.log(error , `dlog line 28`)});

} 
message.channel.send({ embeds: [wel1] }).catch(error => {console.log(error , `dlog line 31`)})
 
}}