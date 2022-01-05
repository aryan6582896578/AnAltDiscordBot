const { Permissions } = require(`discord.js`);
module.exports = {
    name:  `ping`,
    description: "embeds a message",
    execute(client, message  , Discord , args) {

        if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `ping line 7`)})
        const ping2 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
     .setDescription(` Calculating Ping  `)
        message.channel.send({ embeds: [ping2] }).then((resultMessage) =>{
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            const ping1 = new Discord.MessageEmbed() 
            .setColor('#0cfcf2')
            .setTitle("Ping" )
            .setDescription(` Bot latency: ${ping} ms , API Latency: ${client.ws.ping} ms `)
   
   resultMessage.edit( { embeds: [ping1] }).catch(error => {console.log(error , `ping line 18`)})

}).catch(error => {console.log(error , `ping line 24`)}) }
} 
