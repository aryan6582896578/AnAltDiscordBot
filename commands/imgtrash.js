const DIG = require("discord-image-generation");
module.exports = {
    name:  `trash`,
   description: "trash img ",
   aliases: ['beautiful','putin','rip','trigger'],
   async execute (client, message  , Discord , args , cmd){

   
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png' });
       
        if (cmd === 'trash'){
   
        let img = await new DIG.Delete().getImage(avatar)
    
        let attach = new Discord.MessageAttachment(img);
        message.channel.send({ files: [attach] }).catch(error => {console.log(error , `img line 17`)})
    }else if (cmd === 'beautiful'){

        let img = await new DIG.Beautiful().getImage(avatar)
    
        let attach1 = new Discord.MessageAttachment(img, "beautiful.png");
        message.channel.send({ files: [attach1] }).catch(error => {console.log(error , `img line 23`)})
    }else if (cmd === 'putin'){

        let img = await new DIG.Poutine().getImage(avatar)
    
        let attach2 = new Discord.MessageAttachment(img, "Putin.png");
        message.channel.send({ files: [attach2] }).catch(error => {console.log(error , `img line 29`)})
    }else if (cmd === 'rip'){

        let img = await new DIG.Rip().getImage(avatar)
    
        let attach3 = new Discord.MessageAttachment(img, "rip.png");
        message.channel.send({ files: [attach3] }).catch(error => {console.log(error , `img line 35`)})
    }else if (cmd === 'trigger'){

        let img = await new DIG.Triggered().getImage(avatar)
    
        let attach4 = new Discord.MessageAttachment(img, "triggered.gif");
        message.channel.send({ files: [attach4] }).catch(error => {console.log(error , `img line 41`)})
    }
   }
}