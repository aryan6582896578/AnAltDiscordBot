const { SlashCommandBuilder } = require('@discordjs/builders');
const moment = require('moment');
module.exports =  {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Shows UserInfo')

        .addUserOption(option => option.setName('user').setDescription('Select a user')),
	async execute(interaction,  client, Discord) {
		const user = interaction.options.getMember('user') || interaction.member  ;
		const user1 = new Discord.MessageEmbed()
	
	.setColor('#0cfcf2')
	.setThumbnail(user.user.displayAvatarURL({size: 4096, dynamic: true}))
	.addField( " Username", `${user.user.username}`,true)
	.addField( " Tag ", `#${user.user.discriminator}`,true)
	.addField(" User Id", `${user.id}`,true)
	.addField(" Roles ",  `${user.roles.cache.map(role => role.toString()).join(",")}`,true)
	.addField(" Account Created On", moment(user.user.createdAt).format('DD/MM/YY'),true)
	.addField(" Server Joined On",  moment(user.joinedAt).format('DD/MM/YY') ,true)
	.addField(" User Is Bot  :",  `${user.user.bot}`,true)
	.setTimestamp()
	.setFooter(user.user.tag, user.user.displayAvatarURL({size: 4096, dynamic: true}));
	await interaction.reply({ embeds: [user1] , ephemeral: false }).catch(error => {console.log(error , `/userinfo line 24`)});
	},
};