const PrefixSchema = require('../../models/prefix');
module.exports =  async ( Discord ,client, interaction,message) => {
	if (interaction.channel.type == 'DM') return ;
	const defaultprefix = '-'
	 
	const dbresult = await PrefixSchema.findOne({GuildId: interaction.guild.id})
	if (dbresult) {
	  Prefix = dbresult.prefix
  }else{
	  Prefix = defaultprefix
  }

	if (!interaction.isButton()) return;
	
	
if (interaction.customId === 'help1') {
	const help2 = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setTitle("Help For AnAlt Bot <:icon_clyde_blurple_RGB:847345993976119327> ", )
.setDescription(' All  Bot Commands ') //<:verified:755301069080363088>
.setThumbnail('https://i.postimg.cc/Gm1BVk2j/YT-TL-2.jpg')

.addFields({name: `${Prefix}ping` , value: 'To Display Ping For Bot '}) 
.addFields({name:  `${Prefix}invite`, value: 'Invite Link For AnAlt'})
.addFields({name: `${Prefix}Discord` , value: 'Join Discord For  Support'})
.addFields({name:  "Bug", value: `To Report a Bug ${Prefix}bug`})
.addFields({name:  "Suggestion", value: `To Give A Suggestion ${Prefix}suggest`})
.setTimestamp()
interaction.update({ embeds: [help2] });
}if (interaction.customId === 'help2') {
	const help3 = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setTitle("Help For AnAlt Bot <:icon_clyde_blurple_RGB:847345993976119327> ", )
.setDescription('Commands For  User') 
.setThumbnail('https://i.postimg.cc/Gm1BVk2j/YT-TL-2.jpg')
.addFields({name:  "Emojify" , value: `Emojify The Text | ${Prefix}emojify Your Text`})
.addFields({name:  "Userinfo" , value: `Info About A  Specific User | ${Prefix}userinfo @someuser `})
.addFields({name:  "AFK" , value: `Makes A Afk Status For You If You Do  ${Prefix}afk somereason It Will Store The Reason And If Someone Pings You It Will Reply And Give The Reason You Provided `})
.addFields({name:  "Server Info" , value: `Info About The Current Server | ${Prefix}serverinfo `})
.addFields({name: "Avatar" , value: `Discord Avatar Of User | ${Prefix}avatar @someuser`})
.addFields({name: "Coin Flip" , value: `Flips A Coin For You| ${Prefix}flip`})
.addFields({name: "meme" , value: `Random meme | ${Prefix}meme`})
.addFields({name: "Computer Trash " , value: `A Trash Image With Your Avatar | ${Prefix}trash @someuser`})
.addFields({name: "Beautiful" , value: `A beautiful Image With Your Avatar | ${Prefix}beautiful @someuser`})
.addFields({name: "Putin" , value: `A Putin Image With Your Avatar In A Frame | ${Prefix}putin @someuser`})
.addFields({name: "RIP" , value: `A Rip Image With Your Avatar | ${Prefix}rip @someuser`})
.addFields({name: "Trigger" , value: `Your Avatar With Triggered Gif | ${Prefix}trigger @someuser`})
.setTimestamp()

	interaction.update({ embeds: [help3] });
}if (interaction.customId === 'help3') {
	const help5 = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setTitle("Help For AnAlt Bot <:icon_clyde_blurple_RGB:847345993976119327> ", )
.setDescription(' All Command That Require  Permission  ') //<:verified:755301069080363088>
.setThumbnail('https://i.postimg.cc/Gm1BVk2j/YT-TL-2.jpg')
.addFields({name:  "Welcome Channel" , value: `Display Message When User Joins And Leaves A Server | ${Prefix}enablelog |  ${Prefix}disablelog`})
.addFields({name:  "Cleartext", value: `Delete Message From A Text Channel (Cannot Remove If Message Is Older Than 14 Days) | ${Prefix}cleartext No Of Message You Want To Delete`})
.addFields({name:  "Ban " , value: `Ban A User | ${Prefix}ban @someuser`})
.addFields({name:  "kick" , value: `Kick A User | ${Prefix}kick @someuser`})
.addFields({name:  "Warn" , value: `Warn User | ${Prefix}warn @someuser [reason]`})
.addFields({name:  "Warn List" , value: `List All Warning For The User | ${Prefix}warnlist @someuser `})
.addFields({name:  "Warn Remove" , value: `Remove A Specfic Warning If It was Given By Mistake | ${Prefix}warnremove @someuser (warningnumber Use ${Prefix}warnlist To See Warn Number)`})
.addFields({name:  "Warn Clear" , value: `Clear All Warning For A User | ${Prefix}warnclear @someuser `})
.addFields({name:  "poll", value: `Create A Poll | ${Prefix}poll #textchannelname poll Description`}) 
.addFields({name: "slowmode " , value: `Enable Slowmode In A Text Channel | ${Prefix}slowmode no of seconds`})
.addFields({name:  "serverprefix", value: `Changes The Bot Prefix For This Sever| ${Prefix}serverprefix new prefix `})
.addFields({name:  "Bug", value: `To Report a Bug ${Prefix}bug`})
.addFields({name:  "Snipe", value: `Snipes(shows the deleted message) The Last Five Messages Can Snipe Image , Gif | Cannot Snipe Document , embeds ${Prefix}snipe  `})
.setTimestamp()

	interaction.update({ embeds: [help5] });
}if (interaction.customId === 'help4') {
	const help5 = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setTitle("About Custom Prefix ", )
.setDescription(` AnAlt Supports Custom Prefix To Set A Custom Prefix ${Prefix}serverprefix newprefix`) //<:verified:755301069080363088>

	interaction.update( { embeds: [help5] }  );
}if (interaction.customId === 'a1') {
	const aa1 = new Discord.MessageEmbed()
	.setColor('#0cfcf2')
	.setTitle("About Developers ", )
	.setDescription(` AnAlt Is Created By Aryan_8615_#9023 | Kart#1631`)
	interaction.update({ embeds: [aa1] });
}if (interaction.customId === 'a2') {
	const aa2 = new Discord.MessageEmbed()
	.setColor('#0cfcf2')
	.setTitle("About AnAlt ", )
	.setDescription(` A Discord Bot With Custom Prefix, Music And Moderation`)
	interaction.update({ embeds: [aa2] });
}if (interaction.customId === 'a3') {
	const aa3 = new Discord.MessageEmbed()
	.setColor('#0cfcf2')
	.setTitle("About AnAlt ", )
	.setDescription(`Update: Music Command and Snipe Have Been Disabled For Now | Buttons Are Added`)
	interaction.update({ embeds: [aa3] });
}if (interaction.customId === 'a4') {
	const aa4 = new Discord.MessageEmbed()
	.setColor('#0cfcf2')
	.setTitle('AnAlt')
	.setDescription(`A Discord Bot With Custom Prefix, Music , Moderation And More Commands   `)
	.addFields({name:  "Developers" , value: " <:hypesquadbravery:847357438340759562> Aryan_8615_#9023  <:hypesquadbalance:847357938041749504> Kart#1631"})
	.addFields({name:  "Support Server" , value: "[Discord Server](https://discord.gg/DJQ4tSuyaV)"})
	.addFields({name:  "Invite AnAlt" , value: "[Invite](https://discord.com/api/oauth2/authorize?client_id=780294659977117718&permissions=260117621879&scope=applications.commands%20bot)"})
	.addFields({name:  "Commands" , value: `Check Out All The Commands ${Prefix}help`})
	.addFields({name:  "Prefix " , value: `${Prefix}`})
   

  

	interaction.update({ embeds: [aa4] });
}
if (interaction.customId === 'slashhelplist') {
	const hslist = new Discord.MessageEmbed()
	.setColor('#0cfcf2')
.setTitle("Help Command List", )
.setDescription('Slash Command Only')
.setThumbnail('https://i.postimg.cc/Gm1BVk2j/YT-TL-2.jpg')
.addFields({name:  ` Bot ` , value: 'Bot Related Commands'})
.addFields({name:  ` User ` , value: 'User Related Commands'})
.addFields({name:  ` Admin ` , value: 'Admin Commands'})
.addFields({name:  ` Image ` , value: 'Image Related Commands'})

.setTimestamp()
.setFooter(interaction.user.tag);
	interaction.update({ embeds: [hslist] })}
	
	if (interaction.customId === 'slashhelplistbot') {
	const bhslist = new Discord.MessageEmbed()
	.setColor('#0cfcf2')
	.setTitle("Slash (/) Bot Commands ", )
	.setThumbnail('https://i.postimg.cc/Gm1BVk2j/YT-TL-2.jpg')
	.addFields({name: `Ping` , value: `Reply With Pong | /ping`}) 
	.addFields({name:  `Invite`, value: `Bot Invite Link | /invite`})
	.addFields({name: `Discord` , value: `Support Server Link |/server`})
	.addFields({name:  `Bug`, value: `Report A Bug To Devs | /bug `})
	.addFields({name:  `Suggestion`, value: `Suggestions Accepted | /suggest`})
	.setTimestamp()
	interaction.update({ embeds: [bhslist] })}

	if (interaction.customId === 'slashhelplistuser') {
	const uhslist = new Discord.MessageEmbed()
	.setColor('#0cfcf2')
.setTitle("Slash (/) User Commands " )
 .setThumbnail('https://i.postimg.cc/Gm1BVk2j/YT-TL-2.jpg')
.addFields({name:  "Emojify" , value: `Emojify The Text | /emojify Your Text`})
.addFields({name:  "Userinfo" , value: `User Info | /userinfo @someuser `})
.addFields({name:  "Server Info" , value: `Server Info | /serverinfo `})
.addFields({name: "Avatar" , value: `User Avatar | /avatar @someuser`})
.addFields({name: "Coin Flip" , value: `Flips A Coin  | /flip`})
.addFields({name: "hack" , value: `Hack a User | /hack @someuser`})
.addFields({name: "Truth" , value: `A truth and dare command | /truth`})
.addFields({name: "Dare" , value: `A truth and dare command | /dare`})

.setTimestamp()
	
	interaction.update({ embeds: [uhslist] })}

if (interaction.customId === 'slashhelplistimage') {
	const ihslist = new Discord.MessageEmbed()
	.setColor('#0cfcf2')
.setTitle("Slash (/) Image Commands ", )
.setThumbnail('https://i.postimg.cc/Gm1BVk2j/YT-TL-2.jpg')

.addFields({name: "meme" , value: `Random meme | /meme`})
.addFields({name: "image" , value: `Coming Soon`})

.setTimestamp()
	interaction.update({ embeds: [ihslist] })}
	if (interaction.customId === 'slashhelplistadmin') {
		const ahslist = new Discord.MessageEmbed()
		.setColor('#0cfcf2')
	.setTitle("Slash (/) Admin Commands ", )
	.setThumbnail('https://i.postimg.cc/Gm1BVk2j/YT-TL-2.jpg')
	.addFields({name:  "Timeout " , value: `Timeout A User | /timeout @someuser 1m reason || to remove timeout run the command was with time as 1s `})
	.addFields({name:  "Cleartext", value: `Delete Message From A Text Channel (Cannot Remove If Message Is Older Than 14 Days) | ${Prefix}cleartext No Of Message You Want To Delete`})
	.addFields({name:  "Ban " , value: `Ban A User | /ban @someuser`})
	.addFields({name:  "kick" , value: `Kick A User | /kick @someuser`})
	.addFields({name:  "poll", value: `Create A Poll | /poll #textchannelname poll Description`}) 
	.addFields({name: "slowmode " , value: `Enable Slowmode In A Text Channel | /slowmode no of seconds`})
	.addFields({name: "Lock" , value: `Lock A Channel  | /lock `})
	.addFields({name: "Unlock" , value: `Unlock A Channel  | /unlock`})
	.addFields({name: "Warn" , value: `Warn A User  | /warn @someuser reason`})
	.addFields({name: "Warnlist" , value: `Get All Warnings For A User  | /warnlist @someuser`})
	.addFields({name: "Warnclear" , value: `Clear All Warnings For A User  | /warnclear @someuser`})
	.addFields({name: "Warnremove" , value: `Remove A Spefic Warning  | /warnremove @someuser warning number`})
	.setTimestamp()
		interaction.update({ embeds: [ahslist] })}

	}