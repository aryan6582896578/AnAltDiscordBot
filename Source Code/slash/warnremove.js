const warn = require('../models/warn')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require(`discord.js`);

module.exports =  {
    
	data: new SlashCommandBuilder()
		.setName('warnremove')
		.setDescription('Remove A Spefic Warning ')
        .addUserOption(option => option.setName('user').setDescription('Mention A User To Clear There Warnings').setRequired(true))
        .addIntegerOption(option => option.setName('number').setDescription('Enter A Valid Warning Number ').setRequired(true)),

	async execute(interaction,  client, Discord) {

		const user = interaction.options.getMember('user');
        const wn = interaction.options.getInteger('number');

        const perm = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
     .setDescription(`You Dont Have Permission MANAGE_MESSAGES To Run This Command`)
        if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return interaction.reply({ embeds: [perm] })

        warn.findOne({ guildid : interaction.guild.id, user: user.id}, async(err,data) => {
            if(err) throw err;
            const wr1 = new Discord.MessageEmbed() 
            .setColor('#0cfcf2')
            .setDescription(`Deleted The Warning If You Entered A Valid Warning Number `)
            if(data) {
                let number = parseInt(wn) - 1
                data.content.splice(number, 1)
                interaction.reply({ embeds: [wr1] })
                data.save()
            } else {
                const wr2 = new Discord.MessageEmbed() 
                .setColor('#0cfcf2')
                .setDescription(`No Warnings Found `)
                interaction.reply({ embeds: [wr2] })
            }
        })
    }}