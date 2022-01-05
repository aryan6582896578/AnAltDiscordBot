const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports =  {
    
	data: new SlashCommandBuilder()
		.setName('bug')
		.setDescription('Report A Bug To The Dev Team')

        .addStringOption(option => option.setName('report').setDescription('Enter Bug You Found').setRequired(true)),
	async execute(interaction,  client, Discord) {
		const channel1 = client.channels.cache.get('852558596306501672')
        const string = interaction.options.getString('report');
		const limit = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(` Suggestion Should Be Less Than 1024 Characters`) 
       if(string.length > 1024) return interaction.reply({ embeds: [limit] }).catch(error => {console.log(error , `/bug line 17`)});
		const user1 = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
       .addField( "Bug Reported", `Bug Was Reported To The Dev Team`,true)

    const user2 = new Discord.MessageEmbed()
	.setColor('#0cfcf2')
	.setTitle(' Bug Reported!')
	.addField('Author',interaction.user.tag, true)
	.addField('Author ID ', interaction.member.id, true)
	.addField('Server', interaction.guild.name, true)
	.addField('Report', string)
	.setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))
	.setTimestamp()
 

	await interaction.reply({ embeds: [user1] , ephemeral: false }).catch(error => {console.log(error , `/bug line 33`)});

    await channel1.send({ embeds: [user2] }).catch(error => {console.log(error , `/bug line 35`)});

	},
};