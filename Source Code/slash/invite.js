
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Invite Bot To Your Server'),
	async execute(interaction,  client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setTitle(`Invite AnAlt To Your Server`)

.setThumbnail('https://cdn.discordapp.com/attachments/781143525420040204/800691462705905724/AnAlt.png')


const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
            .setURL('https://discord.com/api/oauth2/authorize?client_id=780294659977117718&permissions=260117621879&scope=applications.commands%20bot') 
				.setLabel('Click Here To Invite AnAlt')
				.setStyle('LINK'))
interaction.reply({ embeds: [newEmbed] ,components: [row]}).catch(error => {console.log(error , `/invite line 23`)});;
	},
};