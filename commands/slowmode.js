
const { Permissions } = require(`discord.js`);

module.exports={
    name: "slowmode",
    description:" slowmode",

    execute: async(client, message  , Discord , args)=>{
        if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `slowmode line 9`)})
        const slow0 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`I Dont Have Permission To Run This Command Permission level MANAGE_CHANNELS`)
        const slow1 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`You Dont Have Permission To Run This Command Permission level MANAGE_CHANNELS`)
        const slow2 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Enter No Of Seconds To Enable Slowmode`)
        const slow3 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Enter Seconds In Number`)
        const slow4 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Slowmode Cannot Be Enabled For More Than 21600 Seconds | 6 Hours`)
        const slow5 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setDescription(`Slowmode Should Be More Or Equal To 0 seconds `)

      

        if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS))  return message.channel.send({ embeds: [slow0] }).catch(error => {console.log(error , `slowmode line 31`)})
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return message.channel.send({ embeds: [slow1] }).catch(error => {console.log(error , `slowmode line 32`)})
  
if(!args[0])return message.channel.send({ embeds: [slow2] }).catch(error => {console.log(error , `slowmode line 34`)})
if(isNaN(args[0]))return message.channel.send({ embeds: [slow3] }).catch(error => {console.log(error , `slowmode line 35`)});
if(args[0] > 21600) return message.reply({ embeds: [slow4] }).catch(error => {console.log(error , `slowmode line 36`)});
if(args[0] < 0) return message.reply({ embeds: [slow5] }).catch(error => {console.log(error , `slowmode line 37`)});


message.channel.setRateLimitPerUser(args[0]).catch(error => {console.log(error , `slowmode line 40`)})
const slow6 = new Discord.MessageEmbed() 
.setColor('#0cfcf2')
.setDescription(`Slowmode Enabled For ${args[0]} Seconds`)

message.channel.send({ embeds: [slow6] }).catch(error => {console.log(error , `slowmode line 45`)})




    }
}
