const warn = require('../models/warn')
const { Permissions } = require(`discord.js`);
module.exports = {
    name: 'warn',
 
  async execute(client, message  , Discord , args , cmd){
    if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `warn line `)}) 
    const w12 = new Discord.MessageEmbed() 
    .setColor('#0cfcf2')
 .setDescription(`You Dont Have Permission MANAGE_MESSAGES To Run This Command`)
    const w11 = new Discord.MessageEmbed() 
    .setColor('#0cfcf2')
 .setDescription(`Cannot Warn Them Because They Are My Developer`)
 
    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.channel.send({ embeds: [w12] }).catch(error => {console.log(error , `warn line 15`)})
    const user = message.mentions.members.first(); 
    if(!user) return message.channel.send('Mention A User').catch(error => {console.log(error , `warn line 17`)})
    if( user == "581806133543436298" || user == "533615358372741150" )
    return message.channel.send({ embeds: [w11] }).catch(error => {console.log(error , `warn line 19`)})
    const reason = args.slice(1).join(" ") || 'No Reason Given'
    warn.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
        if(err) throw err;
        if(!data) {
            data = new warn({
                guildid: message.guild.id,
                user : user.user.id,
                content : [
                    {
                        moderator : message.author.id,
                        reason : reason
                    }
                ]
            })
        } else {
            const obj = {
                moderator: message.author.id,
                reason : reason
            }
            data.content.push(obj)
        }
        data.save()
    }).catch(error => {console.log(error , `warn line 42`)});
    const w1 = new Discord.MessageEmbed() 
    .setColor('#0cfcf2')
    .setTitle('Warning')
   .setDescription(`You have been warned in Server ${message.guild.name}     `)
    .addFields({name:  `Reason:` , value: ` ${reason}`})
    .addFields({name:  `Warned By` , value: `<@${message.author.id}>`})
    .setTimestamp()
  
    const w2 = new Discord.MessageEmbed() 
    .setColor('#0cfcf2')
    .setTitle('Warned')
    .setDescription(`${user} Has Been Warned  Reason: ${reason} `)
    .setTimestamp()
    message.channel.send({ embeds: [w2] }).catch(error => {console.log(error , `warn line 56`)})

}}