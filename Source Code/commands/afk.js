const { Permissions } = require(`discord.js`);
const afk = require('../models/afk');
module.exports = {
name: 'afk',
async execute(client, message  , Discord , args , cmd){

if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS))
return message.channel.send(`I Dont Have Permission To Send Embeds `).catch(error => {console.log(error , `afkc line 7`)});

const data = await afk.findOne({UserID: message.author.id}).catch(error => {console.log(error , `afkc line 9`)});
    
if (!data) {

const reason = args.slice(0).join(' ') || 'No Reason Given';

const afk2 = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setTitle('AFK Command AnAlt')
.setDescription(`You Are Now AFK `)
.addFields({name:  "User:" , value: `${message.author.username}`})
.addFields({name:  "Reason" , value: ` ${reason}`})
message.channel.send({ embeds: [afk2] }).catch(error => {console.log(error , `afkc line 21`)});

const newAfk = new afk({ UserID: message.author.id, Reason: reason}); 
newAfk.save();

} else if (data) {
await afk.deleteOne({ UserID: message.author.id});

const afk3 = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setDescription(`${message.author.username} Welcome Back You Are No Longer Afk `)
message.channel.send({ embeds: [afk3] }).catch(error => {console.log(error , `afkc line 32`)});
}}}