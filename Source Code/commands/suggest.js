const { Permissions } = require(`discord.js`);
module.exports = {
    name: "suggest",
  
    description: 'let users suggest',
    async execute(client, message  , Discord , args , cmd){
        if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `suggest line `)})
   const channel1 = client.channels.cache.get('854207313087168532')
        

        const limite = new Discord.MessageEmbed()
        .setColor('#0cfcf2')
        .setDescription(`Suggestion Should Be Less Than 1024 Characters `)

        const sent = new Discord.MessageEmbed()
        .setColor('#0cfcf2')
        .setDescription(`Suggestion Has Been Sent To The Devs `)

        const query = args.join(' ');
        if(!query) return message.reply('Please Specify The Suggestion').catch(error => {console.log(error , `suggest line 20`)})
        if(query.length > 1024) return message.channel.send({ embeds: [limite] }).catch(error => {console.log(error , `suggest line 21`)});
       
        const reportEmbed = new Discord.MessageEmbed()
        .setColor('#0cfcf2')
        .setTitle(' Suggestion Given')
        .addField('User', message.author.toString(), true)
        .addField('User Id ', message.author.id, true)
        .addField('Server', message.guild.name, true)
        .addField('Suggestion', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        channel1.send({ embeds: [reportEmbed] }).catch(error => {console.log(error , `suggest line 32`)});
      
        message.channel.send({ embeds: [sent] }).catch(error => {console.log(error , `suggest line 34`)})
    }
}