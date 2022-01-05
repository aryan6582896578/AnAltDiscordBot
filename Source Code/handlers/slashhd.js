const fs = require('fs');

module.exports = async (client,Discord) => {
  

    const commandFiles = fs.readdirSync('./slash/').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`../slash/${file}`);
      client.slash.set(command.data.name, command);
    } 
}