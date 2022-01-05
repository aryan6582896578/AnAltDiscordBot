const { Permissions } = require(`discord.js`);
module.exports = {
    name: "lock",
    async  execute( client , message,  Discord, args ) {
        if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `lock line 5`)})
        const lock0 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`I Dont Have Permission MANAGE_CHANNELS`)
        const lock1 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`You Dont Have Permission MANAGE_CHANNELS`)
        if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS))  return message.channel.send({ embeds: [lock0] }).catch(error => {console.log(error , `lock line 12`)})
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return message.channel.send({ embeds: [lock1] }).catch(error => {console.log(error , `lock line 13`)})
  
        const ch = message.channel.id
        const lock = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(` 🔒 Channel Locked <#${ch}> By <@${message.author.id}>`)
        message.channel.permissionOverwrites.edit( message.channel.guild.roles.everyone , {
                              SEND_MESSAGES: false
                          }).catch(error => {console.log(error , `lock line 21`)})
                          await message.channel.send({ embeds: [lock] }) .catch(error => {console.log(error , `lock line 22`)})
                          message.delete().catch(error => {console.log(error , `lock line 23`)})
          }}
