const PrefixSchema = require('../models/prefix');
const { MessageActionRow, MessageButton } = require('discord.js');
const { Permissions } = require(`discord.js`);
const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('List For All Slash Command'),
	async execute(interaction,  client, Discord) {
        const defaultprefix = '-'
	
        const dbresult = await PrefixSchema.findOne({GuildId: interaction.guild.id})
        if (dbresult) {
          Prefix = dbresult.prefix
      }else{
          Prefix = defaultprefix
      }
	if (!interaction.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return interaction.reply(`\n I Dont Have Permission To Send Embeds`)



    const help1 = new Discord.MessageEmbed()
	.setColor('#0cfcf2')
.setTitle("Help Command List", )
.setDescription('Slash Command Only')
.setThumbnail('https://i.postimg.cc/Gm1BVk2j/YT-TL-2.jpg')
.addFields({name:  ` Bot ` , value: 'Bot Related Commands'})
.addFields({name:  ` User ` , value: 'User Related Commands'})
.addFields({name:  ` Admin ` , value: 'Admin Commands'})
.addFields({name:  ` Image ` , value: 'Image Related Commands'})

.setTimestamp()
.setFooter(interaction.user.tag);
const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('slashhelplist')
				.setLabel('Command List')
				.setStyle('PRIMARY'),
			new MessageButton()
				.setCustomId('slashhelplistbot')
				.setLabel('Bot Commands')
				.setStyle('PRIMARY'),
				new MessageButton()
				.setCustomId('slashhelplistuser')
				.setLabel('User Commands')
				.setStyle('SUCCESS'),
				new MessageButton()
				.setCustomId('slashhelplistimage')
				.setLabel('Image Commands')
				.setStyle('SUCCESS'),
                new MessageButton()
				.setCustomId('slashhelplistadmin')
				.setLabel('Admin Commands')
				.setStyle('DANGER'),
               
				
		);

interaction.reply({ embeds: [help1] ,components: [row]})
        }}