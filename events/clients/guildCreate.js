module.exports =  async ( Discord ,client, guild) => {

    let channel = client.channels.cache.get("channel id");
    const embed = new Discord.MessageEmbed()
    .setTitle(`New Server `)
    .setDescription(`AnAlt Was Added In A  Server`)
    .addFields({name: `Server Name`,value:`${guild.name}`})
    .addFields({name:`Server Id`,value:`${guild.id}`})
    .addFields({name:`Server Members`,value:`${guild.memberCount}`})
    .addFields({name:`Server Owner`,value:`<@${guild.ownerId}> Owner Id ${guild.ownerId}`})
    .setColor('#0cfcf2')
    .setThumbnail(guild.iconURL({dynamic: true}))
    .setTimestamp()
    .setFooter(`Current Servers ${client.guilds.cache.size}`);
    


    channel.send({ embeds: [embed] }).catch(error => {console.log(error , `guildc line 18`)});
}