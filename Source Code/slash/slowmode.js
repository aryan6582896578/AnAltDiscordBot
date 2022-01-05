const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require(`discord.js`);

module.exports =  {
    
	data: new SlashCommandBuilder()
		.setName('slowmode')
		.setDescription('Slowmode For The Curret Channel')

        
      
       .addIntegerOption(option => option.setName('seconds').setDescription('Enter Time Is Secods For SlowMode').setRequired(true)),
	async execute(interaction,  client, Discord) {
		const integer = interaction.options.getInteger('seconds');

        const userpermission = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(`You Dont Have Permission To Enable Slowmode Missing Permission: MANAGE_CHANNELS  `)
		if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS )) return interaction.reply({embeds: [userpermission]}).catch(error => {console.log(error , `/slowmode line 19`)});
       
		const botpermission = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(`I Dont Have Permission To Enable Slowmode Missing Permission: MANAGE_CHANNELS   `)
		if(!interaction.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return interaction.reply({embeds: [botpermission]}).catch(error => {console.log(error , `/slowmode line 24`)});

        const limit = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Slowmode Cannot Be Enabled For More Than 21600 Seconds | 6 Hours`)
        if(integer > 21600) return interaction.reply({ embeds: [limit] }).catch(error => {console.log(error , `/slowmode line 29`)});

        const lessthanzero = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Slowmode Should Be More Or Equal To 0 seconds`)
        if(integer < 0) return interaction.reply({ embeds: [lessthanzero] }).catch(error => {console.log(error , `/slowmode line 34`)});;

        interaction.channel.setRateLimitPerUser(integer).catch(error => {console.log(error , `/slowmode line 36`)});
const set = new Discord.MessageEmbed() 
.setColor('#0cfcf2')
.setDescription(`Slowmode Enabled For ${integer} Seconds`)

interaction.reply({ embeds: [set] }).catch(error => {console.log(error , `/slowmode line 41`)});

   



    

	},
};