const { Permissions } = require(`discord.js`);
module.exports = {
    name: "bug",
  description: 'let users report bugs',
    async execute(client, message  , Discord , args , cmd){
       
        if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `bug line 7`)})

        const channel1 = client.channels.cache.get('852558596306501672')
       
        const limite = new Discord.MessageEmbed()
        .setColor('#0cfcf2')
        .setDescription(`Bug/Report Should Be Less Than 1024 Characters `)

        const sent = new Discord.MessageEmbed()
        .setColor('#0cfcf2')
        .setDescription(`Bug/Report has been sent To The Devs `)

        const query = args.join(' ');
        if(!query) return message.reply('Please specify the bug').catch(error => {console.log(error , `bug line 20`)})
        if(query.length > 1024) return message.channel.send({ embeds: [limite] }).catch(error => {console.log(error , `bug line 21`)});
       
        const reportEmbed = new Discord.MessageEmbed()
        .setColor('#0cfcf2')
        .setTitle(' Bug Reported!')
        .addField('Author', message.author.toString(), true)
        .addField('Author ID ', message.author.id, true)
        .addField('Server', message.guild.name, true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        channel1.send({ embeds: [reportEmbed] }).catch(error => {console.log(error , `bug line 32`)});
      
        message.channel.send({ embeds: [sent] }).catch(error => {console.log(error , `bug line 34`)})
    }
}