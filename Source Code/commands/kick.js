const { Permissions } = require(`discord.js`);
module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(client, message  , Discord , args){
        if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `kick line 6`)})
        const reason = args.slice(1).join(' ') || "No Reason Given";
        const target = message.mentions.users.first() 

         
        const kick0 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`I Dont Have Permission  KICK_MEMBERS To Run This Command`)
        const kick1 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Mention A User To Kick`)
        const kick2 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Cannot Kick ${target} Because They Are My Developer`)
        const kick3 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`You Dont Have Permission To Run This Command Permission level KICK_MEMBERS `)
        const kick4 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`My Role Is Not High Enough To Kick ${target}`)
        const kick5 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Cannot Kick ${target} Because User Has Same Role As Bot`)
        const kick6 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`I Cannot Kick  Server Owner`)


        const kick7 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`${target} has been kicked From ${message.guild.name}`)
        .addFields({name:  `Reason` , value: `${reason}`})
        .addFields({name:  `Kicked By` , value: `<@${message.author.id}>`})
        .setTimestamp()




        if(!target)return message.channel.send({ embeds: [kick1] }).catch(error => {console.log(error , `kick line 44`)})
        if( target == "581806133543436298" || target == "533615358372741150" )
        return message.channel.send({ embeds: [kick2] }).catch(error => {console.log(error , `kick line 46`)})
        if (!message.guild.me.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.channel.send({ embeds: [kick0] }).catch(error => {console.log(error , `kick line 47`)})
        if(!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.channel.send({ embeds: [kick3] }).catch(error => {console.log(error , `kick line 48`)})
        

      
        const botrole = message.guild.members.resolve(client.user).roles.highest.position;
         const userrole = message.guild.members.resolve(target).roles.highest.position
         const owner = message.guild.ownerId
         const smu = new Discord.MessageEmbed()
         .setColor('#0cfcf2')
         .setDescription(`You Cannot Kick Yourself`)
 const sm = message.member;
 if (sm == user) return message.reply  ({ embeds: [smu] }).catch(error => {console.log(error )});
 if(botrole < userrole) return message.channel.send({ embeds: [kick4] }).catch(error => {console.log(error , `kick line 56`)})
 if(botrole == userrole) return message.channel.send({ embeds: [kick5] }).catch(error => {console.log(error , `kick line 57`)})
 if(target == owner) return message.channel.send({ embeds: [kick6] }).catch(error => {console.log(error , `kick line 58`)})

 const memberTarget = message.guild.members.cache.get(target.id);
 {
    if(target){
       
          
        memberTarget.kick().catch(error => {console.log(error , `kick line 65`)})
        message.channel.send({ embeds: [kick7] }).catch(error => {console.log(error , `kick line 66`)});
   
    }
    }
}
}
   