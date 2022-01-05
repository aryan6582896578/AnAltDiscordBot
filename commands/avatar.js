const { Permissions } = require(`discord.js`);
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
    name: 'avatar',
    description: 'user avatar',
    aliases: ['av'],
    async execute(client, message  , Discord , args) {

      if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `av line 9`)})

      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
      let avatar1 = user.user.displayAvatarURL({ size: 4096,dynamic: false});
      let avatar2 = user.user.displayAvatarURL({ format: 'png' , size: 4096,dynamic: false});
      let avatar3 = user.user.displayAvatarURL({ format: 'jpg' , size: 4096,dynamic: false});
      let avatar4 = user.user.displayAvatarURL({ format: 'png' , size: 4096,dynamic: true});

      const embed = new Discord.MessageEmbed()
      .setTitle(`${user.user.username}'s avatar`)
      .setColor('#0cfcf2')
      .setImage(avatar4)
     .setFooter(user.user.tag);

      const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
		  .setURL(avatar2) 
				.setLabel('PNG')
				.setStyle('LINK'),	
        	new MessageButton()
        .setURL(avatar3) 
          .setLabel('JPG')
          .setStyle('LINK'),
          new MessageButton()
          .setURL(avatar1) 
            .setLabel('WEBP')
            .setStyle('LINK'),
            new MessageButton()
            .setURL(avatar4) 
              .setLabel('GIF')
              .setStyle('LINK'))

      message.channel.send({ embeds: [embed] ,components: [row]}).catch(error => {console.log(error , `av line 39`)});
    
}
}