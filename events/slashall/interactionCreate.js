const prettyMilliseconds = require("pretty-ms");
const moment = require('moment');
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports =  async ( Discord ,client, interaction,message) => {
	const channel1 = client.channels.cache.get('913730018075615282')
	channel1.send(`Command : ${interaction} Server: ${interaction.guild.id} Server Name: ${interaction.guild.name} Userid: ${interaction.user.id} `);
	if (interaction.channel.type == 'DM') return ;

	if (!interaction.isCommand()) return;

	const command = client.slash.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction,client, Discord);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
 
};