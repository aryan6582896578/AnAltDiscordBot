const wel = require('../models/welcome');
const { Permissions } = require(`discord.js`);
module.exports = {
    name: 'enablelog',
  async execute(client, message  , Discord , args , cmd ){
    if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `elog line `)})
    const w12 = new Discord.MessageEmbed() 
    .setColor('#0cfcf2')
 .setDescription(`You Dont Have Permission MANAGE_CHANNELS To Run This Command`)
    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return message.channel.send({ embeds: [w12] }).catch(error => {console.log(error , `elog line `)})

    const channel =  message.channel
    const wel1 = new Discord.MessageEmbed() 
    .setColor('#0cfcf2')
    .setDescription(`<#${message.channel.id}> Saved As User Join Leave Log Channel`)




const data = await wel.findOne({
  GuildId: message.guild.id 
});
if (data) {
  await wel.deleteOne({
    GuildId: message.guild.id 
  });
} 
  const newset = new wel({
    GuildId: message.guild.id ,
    ChannelId: channel.id
});
newset.save();
message.channel.send({ embeds: [wel1] }).catch(error => {console.log(error , `elog line 33`)})

}}

