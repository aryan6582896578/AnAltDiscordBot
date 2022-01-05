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
      .setTitle(`Member Joined  ` )
      .setFooter(`Id ${Member.id} `)
      .setThumbnail(Member.user.displayAvatarURL({size: 4096, dynamic: true}))
      .addFields({name:  `${Member.user.username} Joined The Server` , value: `#${Member.guild.memberCount} Member To Join The Server`})
   
   await channel.send({ embeds: [m1] }).catch(error => {console.log(error , `gmaev line 21`)})
   }

}

