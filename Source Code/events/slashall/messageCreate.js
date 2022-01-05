module.exports =  async ( Discord ,client, message) => {
	const { REST } = require('@discordjs/rest');
	const { Routes } = require('discord-api-types/v9');	
	const fs = require('fs');  
	require('dotenv').config();
	const clientId = '780294659977117718';

	const slash = [];
	const commandFiles = fs.readdirSync('./slash/').filter(file => file.endsWith('.js'));
	
	for (const file of commandFiles) {
		const command = require(`../../slash/${file}`);
		slash.push(command.data.toJSON());
	}

		const rest  = new REST({ version: '9' }).setToken(process.env.altclassified);
	if (message.content.toLowerCase() === '!deploy2' && message.author.id === "581806133543436298" )
			(async () => {
				try {
					console.log('Started refreshing application (/) Global commands.');
			
					await rest.put(
						Routes.applicationCommands(clientId),
						{ body: slash },
					);
			
					console.log('Successfully reloaded application (/)  Global commands.');
				} catch (error) {
					console.error(error);
				}
			})();

	
			
		}
	