const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('discord')
		.setDescription('Invite Link To Bot Support Server'),
	async execute(interaction,  client, Discord) {

        const newEmbed = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setTitle(` <:icon_clyde_blurple_RGB:847345993976119327> AnAlt Support Server | Ask All Bot Related Question Here `)
const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
            .setURL('https://discord.gg/2YJxNtmpAd') 
				.setLabel('Click Here To Join The Support Server')
				.setStyle('LINK'))
		await interaction.reply({ embeds: [newEmbed] ,components: [row] }).catch(error => {console.log(error , `/discord line 18`)});;
	},
};