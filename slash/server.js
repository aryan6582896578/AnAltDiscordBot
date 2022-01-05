
const { SlashCommandBuilder } = require('@discordjs/builders');
const moment = require('moment');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Info About The Server'),
	async execute(interaction,  client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setTitle(`Server Info `)
.setThumbnail(interaction.guild.iconURL())
.addField("Server Name <:icon_clyde_blurple_RGB:847345993976119327> ",   `${interaction.guild.name}`)
.addField("Owner <:Owner:849496043158896650> ",  `<@${interaction.guild.ownerId}>`,true)
.addField("Server ID",  `${interaction.guild.id}`,true)
.addFields({ name: "Members", value: `Total: ${interaction.guild.memberCount} `} )
.addField("Server Verification Level",  `${ interaction.guild.verificationLevel }`,true)
.addField("Server Roles",  `${interaction.guild.roles.cache.size}`,true)
.addField("Server boosters <:serverboost:849494900067270677> ",  `${interaction.guild.premiumSubscriptionCount}`,true)
.addField(" Server Boost Level <:serverboost:849494900067270677> ",  `${interaction.guild.premiumTier}`,true)
.addField("Server Created At",  moment(interaction.guild.createdAt).format('DD/MM/YY') ,true)
.setTimestamp()
.setFooter('Server Info', )
 interaction.reply({ embeds: [newEmbed] }).catch(error => {console.log(error , `/server line 26`)});
	},
};