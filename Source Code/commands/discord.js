const { MessageActionRow, MessageButton } = require('discord.js');
const { Permissions } = require(`discord.js`);
module.exports = {
    name: 'discord',
    description: "this is a invite link  command",
    execute( client , message,  Discord){
        if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `discord line 7`)})
        const newEmbed = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setTitle(` <:icon_clyde_blurple_RGB:847345993976119327> AnAlt Support Server `)

const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
            .setURL('https://discord.gg/2YJxNtmpAd') 
				.setLabel('Click Here To Join The Support Server')
				.setStyle('LINK'))
message.channel.send({ embeds: [newEmbed],components: [row] }).catch(error => {console.log(error , `discord line 18`)});
    }
}