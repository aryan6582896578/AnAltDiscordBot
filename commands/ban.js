const { Permissions } = require(`discord.js`);
module.exports = {
    name: 'ban',
    description: "This command will ban a member from the server",
    execute(client, message  , Discord , args ){
        const reason = args.slice(1).join(' ') || "No Reason Given";
        const target = message.mentions.users.first() 
        const ban0 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(` I Dont Have Permission To Run This Command Permission level  BAN_MEMBERS`)
        const ban1 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Mention A User To Ban`)
        const ban2 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Cannot Ban ${target} Because They Are My Developer`)
        const ban3 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`You Dont Have Permission To Run This Command Permission level  BAN_MEMBERS`)
        const ban4 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`My Role Is Not High Enough To ban ${target}`)
        const ban5 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Cannot Ban ${target} Because User Has Same Role As Bot`)
        const ban6 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`I Cannot Ban Server Owner`)
        const ban7 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`${target} has been Banned From ${message.guild.name}`)
        .addFields({name:  `Reason` , value: `${reason}`})
        .addFields({name:  `Banned By` , value: `<@${message.author.id}>`})
        .setTimestamp()

        if(!target) return message.channel.send({ embeds: [ban1] }).catch(error => {console.log(error , `ban line 36`)})
        if( target == "581806133543436298"|| target == "533615358372741150" )
       
        return message.channel.send({ embeds: [ban2] }).catch(error => {console.log(error , `ban line 39`)})
        
       if (!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.channel.send({ embeds: [ban0] }).catch(error => {console.log(error , `ban line 41`)})
        if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.channel.send({ embeds: [ban3] }).catch(error => {console.log(error , `ban line 42`)})
      

     const botrole = message.guild.members.resolve(client.user).roles.highest.position;
     const userrole = message.guild.members.resolve(target).roles.highest.position
         const owner = message.guild.ownerId
         const smu = new Discord.MessageEmbed()
         .setColor('#0cfcf2')
         .setDescription(`You Cannot ban Yourself`)
 const sm = message.member;
 if (sm == user) return message.reply  ({ embeds: [smu] }).catch(error => {console.log(error )});
 if(botrole < userrole) return message.channel.send({ embeds: [ban4] }).catch(error => {console.log(error , `ban line 48`)})
 if(botrole == userrole) return message.channel.send({ embeds: [ban5] }).catch(error => {console.log(error , `ban line 49`)})
 if(target == owner) return message.channel.send({ embeds: [ban6] }).catch(error => {console.log(error , `ban line 50`)})
 const memberTarget = message.guild.members.cache.get(target.id);
 
 {
    if(target){
       
          
            memberTarget.ban().catch(error => {console.log(error , `ban line 57`)})
            message.channel.send({ embeds: [ban7] }).catch(error => {console.log(error , `ban line 58`)});
       
        }
        }
}
}