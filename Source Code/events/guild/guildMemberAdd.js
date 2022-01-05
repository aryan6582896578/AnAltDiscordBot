
    const muteSchema = require('../../models/mutes')
    module.exports = async (Discord ,client,Member) =>{

    
           const data = await muteSchema.findOne({
               Guildid: Member.guild.id,
             Users: Member.id
         } );
            
           if (!data)return;
       
           else if (data) {
               const role = Member.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
               if(!role) {
                   try {
                       
         
                    let muterole = await Member.guild.roles.create({
                
                        name : 'muted',
                        permissions:  []
                   
                });
                Member.guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').forEach(async (channel, id) => {
                                   await channel.permissionOverwrites.create(muterole, {
                        SEND_MESSAGES: false
                      })
})
                      
                   } catch (error) {
                       console.log(error)
                   }
               };
       
             await Member.roles.add(role)
       
           
        }
    }