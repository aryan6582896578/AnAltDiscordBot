
const { SlashCommandBuilder } = require('@discordjs/builders');
const got = require('got')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('A Random Meme'),
	async execute(interaction,  client, Discord) {
        const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('#0cfcf2')
            embed.setFooter(`👍 ${memeUpvotes}  💬 ${memeNumComments}`)
            interaction.reply({ embeds: [embed] }).catch(error => {console.log(error , `/meme line 25`)});

    })
}}