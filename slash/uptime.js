
const { SlashCommandBuilder } = require('@discordjs/builders');
const prettyMilliseconds = require("pretty-ms");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uptime')
		.setDescription('Shows Bot Uptime'),
	async execute(interaction,  client, Discord) {
		await interaction.reply({ content: `AnAlt Has Been Online For ${prettyMilliseconds(client.uptime)}`, ephemeral: false }).catch(error => {console.log(error , `/up line 10`)});
	},
};