const PrefixSchema = require('../models/prefix');
const { Permissions } = require(`discord.js`);
module.exports = {
    name: 'poll',
    description: 'creates poll',
    async execute(client, message  , Discord , args) {
   
        const defaultprefix = '-'
         
        const dbresult = await PrefixSchema.findOne({GuildId: message.guild.id})
     if (dbresult) {
            Prefix = dbresult.prefix
        }else{
            Prefix = defaultprefix
        }
        if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `poll line 16`)})
        const poll0 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`I Dont Have Permission MANAGE_MESSAGES`)
        const poll1 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(` You Dont Have Permission MANAGE_MESSAGES`)
        const poll2 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Mention A Channel ${Prefix}poll #Channelname Poll Description`)
        const poll3 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Write Poll Description ${Prefix}poll #Channelname Poll Description`)


  
       
        if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES))   return message.channel.send({ embeds: [poll0] }).catch(error => {console.log(error , `poll line 33`)})
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply({ embeds: [poll1] }).catch(error => {console.log(error , `poll line 34`)})
    let pollChannel = message.mentions.channels.first();
    if(!pollChannel)return message.channel.send({ embeds: [poll2] }).catch(error => {console.log(error , `poll line 36`)})
    let pollDescription = args.slice(1).join(' ');
    if(!pollDescription)return message.channel.send({ embeds: [poll3] }).catch(error => {console.log(error , `poll line 38`)})
    let embedPoll = new Discord.MessageEmbed()
    .setTitle(' New Poll ')
    .setDescription(pollDescription)
    .setColor('#0cfcf2')
    .setTimestamp()
    .setFooter( message.author.tag, message.author.displayAvatarURL() ,`${Prefix}discord for support`);
    let msgEmbed = await pollChannel.send({ embeds: [embedPoll] }).catch(error => {console.log(error , `poll line 45`)})
    await msgEmbed.react('👍') .catch(error => {console.log(error , `poll line 46`)})
    await msgEmbed.react('👎').catch(error => {console.log(error , `poll line 47`)})
    message.delete({timeout: 100})
} 
}