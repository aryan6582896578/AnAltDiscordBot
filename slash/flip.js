
const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('flip')
		.setDescription('Flip A Coin'),
	async execute(interaction,  client, Discord) {
        let flip1= [" You Flipped A Head","You Flipped A Tail"];
        const flip2 = flip1[Math.floor(Math.random() * flip1.length)];
        const flipped = new Discord.MessageEmbed()
    .setColor('#0cfcf2')
    .setTitle("Coin Flip ", )
    .setDescription(` ${flip2}`) 
    .setTimestamp()
    .setFooter(interaction.user.tag);
		await interaction.reply({embeds:[flipped], ephemeral: false }).catch(error => {console.log(error , `/eflip line 18`)});;
	},
};