const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = { Client, Collection, Intents } = require('discord.js');
const moment = require('moment');
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports =  {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Shows User avatar')

        .addUserOption(option => option.setName('user').setDescription('Select a user')),
	async execute(interaction) {
		const user = interaction.options.getUser('user') || interaction.user;
	
let avatar1 = user.displayAvatarURL({ size: 4096,dynamic: false});
let avatar2 = user.displayAvatarURL({ format: 'png' , size: 4096,dynamic: false});
let avatar3 = user.displayAvatarURL({ format: 'jpg' , size: 4096,dynamic: false});
let avatar4 = user.displayAvatarURL({ format: 'png' , size: 4096,dynamic: true});

const embed = new Discord.MessageEmbed()
.setTitle(`${user.username}'s avatar`)
.setColor('#0cfcf2')
.setImage(avatar4)
.setFooter(user.tag);
const row = new MessageActionRow()
.addComponents(
new MessageButton()
.setURL(avatar2) 
.setLabel('PNG')
.setStyle('LINK'),	
new MessageButton()
.setURL(avatar3) 
.setLabel('JPG')
.setStyle('LINK'),
new MessageButton()
.setURL(avatar1) 
.setLabel('WEBP')
.setStyle('LINK'),
new MessageButton()
.setURL(avatar4) 
.setLabel('GIF')
.setStyle('LINK'))
await interaction.reply({ embeds: [embed] , components: [row], ephemeral: false }).catch(error => {console.log(error , `/av line 42`)})
	},
};