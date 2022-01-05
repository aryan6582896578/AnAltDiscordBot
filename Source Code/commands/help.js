const prefix = require('../models/prefix');
const PrefixSchema = require('../models/prefix');
const { MessageActionRow, MessageButton } = require('discord.js');
const { Permissions } = require(`discord.js`);
module.exports = {
    name:  `help`,
    description: "help ",
   async execute( client , message,  Discord, args) {

	if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `help line 10`)})



    const help1 = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setTitle("Help For AnAlt Bot <:icon_clyde_blurple_RGB:847345993976119327> ", )
.setDescription(`Select A Option `) 
.setThumbnail('https://i.postimg.cc/Gm1BVk2j/YT-TL-2.jpg')
.addFields({name:  ` Bot ` , value: 'All Commands related to bot '})
.addFields({name:  ` User ` , value: 'All Commands related That Everyone can use like userinfo etc '})
.addFields({name:  ` Admin ` , value: 'All Commands That Require Specific Permission '})
.addFields({name:  `Custom Prefix` , value: `Prefix For This Server Is ${Prefix} To Change The Prefix Check ${Prefix}help admin For More Detail `})
.setTimestamp()
.setFooter(message.author.tag, message.author.displayAvatarURL());
const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('help1')
				.setLabel('Bot Commands')
				.setStyle('PRIMARY'),
				new MessageButton()
				.setCustomId('help2')
				.setLabel('User Commands')
				.setStyle('SUCCESS'),
                new MessageButton()
				.setCustomId('help3')
				.setLabel('Admin Commands')
				.setStyle('DANGER'),
                new MessageButton()
				.setCustomId('help4')
				.setLabel('Custom Prefix')
				.setStyle('SECONDARY'),
		);

message.channel.send({ embeds: [help1] ,components: [row]}).catch(error => {console.log(error , `help line 46`)})


    }
}
