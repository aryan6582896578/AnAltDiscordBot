const warn = require('../models/warn')
const { Permissions } = require(`discord.js`);
module.exports = {
    name: 'warnremove',
    aliases: ['removewarn'],
  async execute(client, message  , Discord , args , cmd){
    if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `warnr line 7`)})
    const w12 = new Discord.MessageEmbed() 
    .setColor('#0cfcf2')
 .setDescription(`You Dont Have Permission MANAGE_MESSAGES To Run This Command`)
    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.channel.send({ embeds: [w12] }).catch(error => {console.log(error , `warnr line 11`)})
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.channel.send('Mention A User').catch(error => {console.log(error , `warnr line 13`)})
    warn.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
        if(err) throw err;
        const wr1 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setTitle(`Deleted The Warning `)
        if(data) {
            let number = parseInt(args[1]) - 1
            data.content.splice(number, 1)
            message.channel.send({ embeds: [wr1] })
            data.save()
        } else {
            const wr2 = new Discord.MessageEmbed() 
            .setColor('#0cfcf2')
            .setTitle(`No Warnings Found For The User In This Server`)
            message.channel.send({ embeds: [wr2] }).catch(error => {console.log(error , `warnr line 28`)})
        }
    })
}
}