const warn = require('../models/warn')
const { Permissions } = require(`discord.js`);
module.exports = {
    name: 'warnclear',
    aliases: ['clearwarn'],
  async execute(client, message  , Discord , args , cmd){
    if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `warnc line 7`)})
    const w12 = new Discord.MessageEmbed() 
    .setColor('#0cfcf2')
 .setDescription(`You Dont Have Permission MANAGE_MESSAGES To Run This Command`)
    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.channel.send({ embeds: [w12] }).catch(error => {console.log(error , `warnc line 11`)})
   
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.channel.send('Mention A User').catch(error => {console.log(error , `warnc line 14`)})
    warn.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
        if(err) throw err;
        const cw1 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Cleared All Warnings For ${user.user.tag} `)
        

        if(data) {
            await warn.findOneAndDelete({ user : user.user.id, guildid: message.guild.id})
            message.channel.send({ embeds: [cw1] })
        } else {
            const cw2 = new Discord.MessageEmbed() 
            .setColor('#0cfcf2')
            .setTitle(`No Warnings Found For The User In This Server`)
            message.channel.send({ embeds: [cw2] }).catch(error => {console.log(error , `warnc line 29`)})
        }
    })

  }}