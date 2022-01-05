const wel = require('../../models/welcome')

 
    module.exports = async (Discord ,client,Member ) =>{


   const data = await wel.findOne({
      GuildId: Member.guild.id,
   });
   if(!data) return;

   else if (data){
      let channel = Member.guild.channels.cache.get(data.ChannelId);
      const m1 = new Discord.MessageEmbed() 
      .setColor('#0cfcf2')
      .setTitle(`Member Left   ` )
      .setFooter(`Id ${Member.id} `)
      .setThumbnail(Member.user.displayAvatarURL({size: 4096, dynamic: true}))
      .addFields({name:  `${Member.user.username} Left The Server` , value: `#${Member.guild.memberCount} Member Are There In The Server Now`})
   
   await channel.send({ embeds: [m1] }).catch(error => {console.log(error , `gmrev line 21`)})
   }

}

