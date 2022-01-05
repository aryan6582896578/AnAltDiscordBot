// for testing

const prettyMilliseconds = require("pretty-ms");
const moment = require('moment');
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports =  async ( Discord ,client, interaction,message) => {

	if (interaction.channel.type == 'DM') return ;
	if (!interaction.isCommand()) return;

	 if (interaction.commandName === 'up1') {
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('primary')
				.setLabel('Primary')
				.setStyle('PRIMARY'),
				new MessageButton()
				.setCustomId('primary1')
				.setLabel('Primary1')
				.setStyle('PRIMARY'),
		);
		await interaction.reply({ content: ` ${prettyMilliseconds(client.uptime)}`, ephemeral: false ,components: [row] });
} 
 if  (interaction.commandName === 'avatar1') {
	let user =  interaction.user; 
	let avatar1 = user.displayAvatarURL({ size: 4096,dynamic: true});
	let avatar2 = user.displayAvatarURL({ format: 'png' , size: 4096,dynamic: true});
	let avatar3 = user.displayAvatarURL({ format: 'jpg' , size: 4096,dynamic: true});

	const embed = new Discord.MessageEmbed()
	.setTitle(`${user.username}'s avatar`)
	.setDescription(`[WEBP](${avatar1}) | [PNG](${avatar2}) | [JPG](${avatar3}) `)
	.setColor('#0cfcf2')
	.setImage(avatar1)
	.setFooter(user.tag);
	await interaction.reply({ embeds: [embed] , ephemeral: false })
}if (interaction.commandName === 'userinfo1') {
	let user =  interaction.user; 
	const user1 = new Discord.MessageEmbed()
	.setColor('#0cfcf2')
  .setThumbnail(user.displayAvatarURL({size: 4096, dynamic: true}))
  .addField( " Username", `${user.username}`,true)
  .addField( " Tag ", `#${user.discriminator}`,true)
  .addField(" User Id", `${user.id}`,true)

  .addField(" Account Created On", moment(user.createdAt).format('DD/MM/YY'),true)
  .addField(" Server Joined On",  moment(user.joinedAt).format('DD/MM/YY') ,true)
.setTimestamp()
  .setFooter(user.tag, user.displayAvatarURL({size: 4096, dynamic: true}));
	await interaction.reply({ embeds: [user1] , ephemeral: false });
}
};