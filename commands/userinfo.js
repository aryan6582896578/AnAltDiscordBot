const moment = require('moment');
const { MessageActionRow, MessageButton } = require('discord.js');
const { Permissions } = require(`discord.js`);
module.exports = {
  name: 'userinfo',
  description: "this is a user info command",
  execute(client, message  , Discord , args){

    if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `userinfo line 9`)}) 
  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;



  const newEmbed = new Discord.MessageEmbed()
  .setColor('#0cfcf2')
.setThumbnail(user.user.displayAvatarURL({size: 4096, dynamic: true}))
.addField( " Username", `${user.user.username}`,true)
.addField( " Tag ", `#${user.user.discriminator}`,true)
.addField(" User Id", `${user.id}`,true)
.addField(" Roles ",  `${user.roles.cache.map(role => role.toString()).join(",")}`,true)
.addField(" Account Created On", moment(user.user.createdAt).format('DD/MM/YY'),true)
.addField(" Server Joined On",  moment(user.joinedAt).format('DD/MM/YY') ,true)
.addField(" User Is Bot  :",  `${user.user.bot}`,true)
.addField("Important",  `This Command Will Be Removed Soon And Will Be Shifted To Slash(/) Command To Enable Slash Command [Click Here](https://discord.com/api/oauth2/authorize?client_id=780294659977117718&permissions=260117621879&scope=applications.commands%20bot) `,true)


.setTimestamp()
.setFooter(user.user.tag, user.user.displayAvatarURL({size: 4096, dynamic: true}));
const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('u1')
				.setLabel('Coming Soon')
				.setStyle('SUCCESS')
        .setDisabled(true),
    )
message.channel.send({ embeds: [newEmbed],components: [row] }).catch(error => {console.log(error , `userinfo line 39`)}) ;

}
}
