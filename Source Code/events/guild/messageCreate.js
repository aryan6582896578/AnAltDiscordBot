const PrefixSchema = require('../../models/prefix');
const afk = require('../../models/afk');
const { MessageActionRow, MessageButton} = require('discord.js');

module.exports =  async (Discord , client , message ) => {
const defaultprefix = '-'

if (message.channel.type === 'dm') return; 

const dbresult = await PrefixSchema.findOne({GuildId: message.guild.id})
if (dbresult) {
Prefix = dbresult.prefix
}else {
    Prefix = defaultprefix
}
  
  const m1 = new Discord.MessageEmbed() 
  .setColor('#0cfcf2')
  .setTitle('AnAlt')
  .setDescription(`A Discord Bot With Custom Prefix, Moderation And More Commands   `)
  .addFields({name:  "Developers" , value: " <:hypesquadbravery:847357438340759562> Aryan_8615_#9023  <:hypesquadbalance:847357938041749504> Kart#1631"})
  .addFields({name:  "Support Server" , value: "[Discord Server](https://discord.gg/2YJxNtmpAd)"})
  .addFields({name:  "Invite AnAlt" , value: "[Invite](https://discord.com/api/oauth2/authorize?client_id=780294659977117718&permissions=260117621879&scope=applications.commands%20bot)"})
  .addFields({name:  "Commands" , value: `Check Out All The Commands ${Prefix}help`})
  .addFields({name:  "Prefix " , value: `${Prefix}`})
  .addFields({name:  "Slash Command" , value: `/help`})
 .setFooter('Thanks For Using AnAlt');
  const row = new MessageActionRow()
  .addComponents(
    new MessageButton()
      .setCustomId('a1')
      .setLabel('Developers')
      .setStyle('SUCCESS'),
      new MessageButton()
      .setCustomId('a2')
      .setLabel('About AnAlt')
      .setStyle('PRIMARY'),
      new MessageButton()
      .setCustomId('a3')
      .setLabel('Development')
      .setStyle('DANGER'),
      new MessageButton()
      .setCustomId('a4')
      .setLabel('@AnAlt')
      .setStyle('SECONDARY'),
      new MessageButton()
      .setURL('https://discord.com/api/oauth2/authorize?client_id=780294659977117718&permissions=260117621879&scope=applications.commands%20bot') 
  .setLabel('Click Here To Invite AnAlt')
  .setStyle('LINK'))
  
  if (message.author.bot) return;

  if (message.content.includes (client.user.id) )
  message.channel.send({ embeds: [m1] ,components: [row]}).catch(error => {console.log(error , `messc line 75`)});


if (message.author.bot) return;
const mentioned = message.mentions.members.first();
if (mentioned) {
  const data = await afk.findOne({
    UserID: mentioned.id,
  });

  if (data) {

    const afk4 = new Discord.MessageEmbed()
    .setColor('#0cfcf2')
    .setTitle('AnAlt')
    .setDescription(`They Are AFK `)
    .addFields({name:  "Username " , value: `${mentioned.user.username}`})
.addFields({name:  "Reason" , value: ` ${data.Reason}`})
    message.channel.send({ embeds: [afk4] }).catch(error => {console.log(error , `messc line 103`)});
  }
  }
  const mainData = await afk.findOne({
    UserID: message.author.id,
  });

const afk5 = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setTitle('AnAlt')
.setDescription(`Afk Command`)
.addFields({name:  "Username " , value: `${message.author.username}`})
.addFields({name:  "Status" , value: `Welcome Back , I Have Removed You From Afk Status`})
if (mainData) {
  message.channel.send({ embeds: [afk5] }).catch(error => {console.log(error , `messc line 117`)});
  mainData.deleteOne({
    UserID: message.author.id,
  });
}
if(!message.content.startsWith(Prefix) || message.author.bot) return;
    const args = message.content.slice(Prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command =client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    let user = message.mentions.members.first() || message.member;
   if(command) command.execute(client, message  , Discord , args , cmd);
   
}
