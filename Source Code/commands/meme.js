//const randomPuppy = require ("random-puppy")
const { Permissions } = require(`discord.js`);
const got = require('got')
module.exports = {
    name:  `meme`,
   description: "dank meme ",
    async execute(client, message  , Discord , args) {
        if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.channel.send(`\nI Dont Have Permission To Send Embeds`).catch(error => {console.log(error , `meme line 8`)})
        const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
         let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('#0cfcf2')
            embed.setFooter(`👍 ${memeUpvotes}  💬 ${memeNumComments}`)
            message.channel.send({ embeds: [embed] }).catch(error => {console.log(error , `meme line 24`)});
        })
}}