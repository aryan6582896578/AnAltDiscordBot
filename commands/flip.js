const PrefixSchema = require('../models/prefix');
module.exports = {
    name:  `flip`,
    description: "flips head or tail ",
   async execute( client , message,  Discord) {

    


    let flip1= [" You Flipped A Head","You Flipped A Tail"];
    const flip2 = flip1[Math.floor(Math.random() * flip1.length)];
    const newEmbed = new Discord.MessageEmbed()
.setColor('#0cfcf2')
.setTitle("Coin Flip ", )
.setDescription(` ${flip2}`) 
.setTimestamp()
.setFooter(message.author.tag, message.author.displayAvatarURL());
 message.channel.send({ embeds: [newEmbed] }).catch(error => {console.log(error , `flip line 18`)});

    }
}
