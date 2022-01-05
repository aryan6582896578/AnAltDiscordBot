const { Permissions } = require(`discord.js`);
module.exports = {
    name: 'vote',
    
    description: "Vote Analt",
    execute( client , message,  Discord){
        if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `vote line 7`)}) 
        const newEmbed = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setTitle(`Vote For AnAlt On`)
.addFields({name:  "Top.gg" , value: "[Click Here To Vote ](https://top.gg/bot/780294659977117718/vote)"})//'Click Here To Vote'
.setThumbnail(`https://cdn.discordapp.com/attachments/802415461357977661/820566823463419934/download.png`)
message.channel.send({ embeds: [newEmbed] }).catch(error => {console.log(error , `vote line 13`)}) ;

    }}