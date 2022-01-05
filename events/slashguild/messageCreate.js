
	module.exports =  async ( Discord ,client, message) => {
		const { REST } = require('@discordjs/rest');
		const { Routes } = require('discord-api-types/v9');	
		require('dotenv').config();
		const clientId = '780294659977117718';
const guildId = '781143524980031499';
			const data = [{
				
				name: 'up1',
				description: 'Replies with uptime guild'},
				{
				name: 'avatar1',
				description: 'shows Your Avatar guild',
				},	{
					name: 'userinfo1',
					description: 'shows Your Avatar guild',
					}
			];
			const rest = new REST({ version: '9' }).setToken(process.env.altclassified);
			if (message.content.toLowerCase() === '!deploy1' && message.author.id === "581806133543436298" )
			(async () => {
				try {
					console.log('Started refreshing application (/) Guild commands.');
			
					await rest.put(
						Routes.applicationGuildCommands(clientId, guildId),
						{ body: data },
					);
			
					console.log('Successfully reloaded application (/)  Guild commands.');
				} catch (error) {
					console.error(error);
				}
			})();


		}
