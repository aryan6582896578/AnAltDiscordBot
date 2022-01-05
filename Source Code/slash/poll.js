const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require(`discord.js`);

module.exports =  {
    
	data: new SlashCommandBuilder()
		.setName('poll')
		.setDescription('Make A Poll')
        .addChannelOption(option => option.setName('channel').setDescription('Select A Channel To Make Poll').setRequired(true))
        .addStringOption(option => option.setName('description').setDescription('Enter Poll Description').setRequired(true)),
	async execute(interaction,  client, Discord) {

        if(!interaction.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return interaction.reply(`I Dont Have Permission To Send Embed `).catch(error => {console.log(error , `/poll line 13`)});

        const reactperm = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(`I Dont Have Permission To React To A Message Missing Permission: ADD_REACTIONS `)
if(!interaction.guild.me.permissions.has(Permissions.FLAGS.ADD_REACTIONS)) return interaction.reply({embeds: [reactperm]}).catch(error => {console.log(error , `/poll line 18`)});
        
        const userpermission = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(`You Dont Have Permission To Make The Poll Missing Permission: MANAGE_MESSAGES `)

        if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return interaction.reply({embeds: [userpermission]}).catch(error => {console.log(error , `/poll line 24`)});
        const string = interaction.options.getString('description');
        const pollchannel = interaction.options.getChannel('channel');
        let embedPoll = new Discord.MessageEmbed()
        .setTitle(' New Poll ')
        .setDescription(string)
        .setColor('#0cfcf2')
        .setTimestamp()
        .setFooter(interaction.user.tag);
        let msgEmbed = await pollchannel.send({ embeds: [embedPoll] }).catch(error => {console.log(error , `/poll line 33`)});
       // });
        await msgEmbed.react('👍') .catch(error => {console.log(error , `/poll line 35`)});
        await msgEmbed.react('👎').catch(error => {console.log(error , `/unlock line 35`)});
        await interaction.reply(`Poll Created In Channel ${pollchannel}`).catch(error => {console.log(error , `/poll line 38`)});
    
    }}