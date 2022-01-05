const moment = require('moment');
const { Permissions } = require(`discord.js`);
module.exports = {
    name:  `serverinfo`,
    description: "serverinfo",
    
    execute(client, message  , Discord , args) {
        if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `server line 8`)})
        const newEmbed = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setTitle(`Server Info `)
.setThumbnail(message.guild.iconURL())
.addField("Server Name <:icon_clyde_blurple_RGB:847345993976119327> ",   `${message.guild.name}`)
.addField("Owner <:Owner:849496043158896650> ",  `<@${message.guild.ownerId}>`,true)
.addField("Server ID",  `${message.guild.id}`,true)
.addFields({ name: "Members", value: `Total: ${message.guild.memberCount}`} )
.addField("Server Verification Level",  `${ message.guild.verificationLevel }`,true)
.addField("Server Roles",  `${message.guild.roles.cache.size}`,true)
.addField("Server boosters <:serverboost:849494900067270677> ",  `${message.guild.premiumSubscriptionCount}`,true)
.addField(" Server Boost Level <:serverboost:849494900067270677> ",  `${message.guild.premiumTier}`,true)
.addField("Server Created At",  moment(message.guild.createdAt).format('DD/MM/YY') ,true)
.setTimestamp()
.setFooter('Server Info', )
 message.channel.send({ embeds: [newEmbed] }).catch(error => {console.log(error , `server line 25`)});
}
}