
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require(`discord.js`);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unlock')
		.setDescription('Unlocks A Channel '),
	async execute(interaction,  client, Discord) {
       

        const userpermission = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(`You Dont Have Permission To Unlock Channel Missing Permission: MANAGE_CHANNELS  `)
		if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS )) return interaction.reply({embeds: [userpermission]}).catch(error => {console.log(error , `/unlock line 15`)});
       
		const botpermission = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(`I Dont Have Permission To Unlock Channel Missing Permission: MANAGE_CHANNELS   `)
		if(!interaction.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return interaction.reply({embeds: [botpermission]}).catch(error => {console.log(error , `/unlock line 20`)});

        const ch = interaction.channel.id
        const lock = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(` 🔓 Channel Unlocked <#${ch}> By <@${interaction.member.id}>`)
        interaction.channel.permissionOverwrites.edit( interaction.channel.guild.roles.everyone , {
                              SEND_MESSAGES: true
                          }).catch(error => {console.log(error , `/unlock line 28`)});
                          await interaction.reply({ embeds: [lock] }).catch(error => {console.log(error , `/unlock line 29`)});
                         

    }};