
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('privacy-policy')
		.setDescription('AnAlt Discord Bot Privacy Policy '),
	async execute(interaction,  client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setTitle(`AnAlt Privacy Policy`)
.setDescription('By Using The Bot (AnAlt) You Agree To The Following Conditions \n **1.** That You Will Not Spam The Bot Commands \n ** 2. ** Do not use any exploits Found For Your Advantage \n ** 3.** Report All The Bugs Using /bug ')
.addFields({name:  `**User Privacy **` , value: `We Care About Your Privcy So The Common Questions About Privacy Will Be Given Below`})
.addFields({name:  `**What Data Do We Store**` , value: `We Store Server/Guild Id , User Id , Your Suggestions And Bugs For Moderation Purpose `})
.addFields({name:  `**Do We Store Message Content**` , value: `No We Dont Log/Store Any Messages Sent By A User  `})
.addFields({name:  `**Do You Encrypt Data**` , value: `Yes All The Data Mentioned Above Is Encrypted `})
.addFields({name:  `**Additional Questions**` , value: `Join Our Discord Server For Any More Questions`})
.setThumbnail('https://cdn.discordapp.com/attachments/781143525420040204/800691462705905724/AnAlt.png')


const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
            .setURL('https://discord.gg/2YJxNtmpAd') 
				.setLabel('Discord Server')
				.setStyle('LINK'))
interaction.reply({ embeds: [newEmbed] ,components: [row]});
	},
};