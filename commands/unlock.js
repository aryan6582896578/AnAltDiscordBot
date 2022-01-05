const { Permissions } = require(`discord.js`);
module.exports = {
    name: "unlock",
    async  execute( client , message,  Discord, args ) {
        if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `unlock line `)}) 
        const ulock0 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(` I Dont Have Permission MANAGE_CHANNELS`)
        const ulock1 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`You Dont Have Permission MANAGE_CHANNELS`)

      

        if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return message.channel.send({ embeds: [ulock0] }).catch(error => {console.log(error , `unlock line 15`)}) 
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return message.channel.send({ embeds: [ulock1] }).catch(error => {console.log(error , `unlock line 16`)}) 
       
        const ch = message.channel.id
        const unlock = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(` 🔓 Channel Unlocked <#${ch}> By <@${message.author.id}>`)
                
                          message.channel.permissionOverwrites.edit( message.channel.guild.roles.everyone  , {
                              SEND_MESSAGES: true
                          }).catch(error => {console.log(error , `unlock line 25`)}) 
                          await message.channel.send({ embeds: [unlock] }).catch(error => {console.log(error , `unlock line 26`)}) 
                          message.delete().catch(error => {console.log(error , `unlock line 27`)}) 
          }}
   