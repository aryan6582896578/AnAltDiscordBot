const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require(`discord.js`);

module.exports =  {
    
	data: new SlashCommandBuilder()
		.setName('cleartext')
		.setDescription('Delete Messages ')

        
      
       .addIntegerOption(option => option.setName('amount').setDescription('Enter Amount Of Message To Be Deleted').setRequired(true)),
	async execute(interaction,  client, Discord) {
		const integer = interaction.options.getInteger('amount');

        const userpermission = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(`You Dont Have Permission To Cleartext Missing Permission: MANAGE_CHANNELS  `)
		if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS )) return interaction.reply({embeds: [userpermission]})
       
		const botpermission = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(`I Dont Have Permission To Cleartext Missing Permission: MANAGE_CHANNELS   `)
		if(!interaction.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return interaction.reply({embeds: [botpermission]})

        const limit = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Cannot Delete More Than 100 Message At A Time `)
        if(integer > 100) return interaction.reply({ embeds: [limit] });

        const lessthanzero = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Cleartext Amount Cannot Be 0`)
        if(integer < 0) return interaction.reply({ embeds: [lessthanzero] });
        let deleteAmount = integer
    
        interaction.channel.bulkDelete(integer).then(messages => {
                const del = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setThumbnail(interaction.guild.iconURL())
          .addField( ` Deleted Message ` ,  `${messages.size} messages` , true )
          .addField( ` Channel `, `${interaction.channel}` , true )
          .addField(`Deleted By`, `${interaction.member}`, true)
          .setTimestamp() 
            
            interaction.reply( {embeds: [del] }) }  ).catch(error => { console.log(error , `cleartext slash 46`) ,interaction.reply('Message Cannot Be Deleted Because It Is Older Than 14 Days') });


},
};