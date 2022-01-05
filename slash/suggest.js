const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports =  {
    
	data: new SlashCommandBuilder()
		.setName('suggest')
		.setDescription('Suggest Some New Feature Or How To Improve The Old Features ')

        .addStringOption(option => option.setName('suggest').setDescription('Enter Your Suggestion').setRequired(true)),
	async execute(interaction,  client, Discord) {
		const channel1 = client.channels.cache.get('854207313087168532')
        const string = interaction.options.getString('suggest');

		const limit = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(` Suggestion Should Be Less Than 1024 Characters`) 
       if(string.length > 1024) return interaction.reply({ embeds: [limit] }).catch(error => {console.log(error , `/suggest line 18`)});

 

    const reportEmbed = new Discord.MessageEmbed()
    .setColor('#0cfcf2')
    .setTitle(' Suggestion Given')
    .addField('User', interaction.user.tag, true)
    .addField('User Id ', interaction.member.id, true)
    .addField('Server', interaction.guild.name, true)
    .addField('Suggestion', string)
    .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()
   await  channel1.send({ embeds: [reportEmbed] }).catch(error => {console.log(error , `/suggest line 31`)});

    
    const sent = new Discord.MessageEmbed()
    .setColor('#0cfcf2')
    .setDescription(` Suggestion Has Been Given To The Devs`) 
    await interaction.reply({embeds:[sent]}).catch(error => {console.log(error , `/suggest line 37`)});

	},
};