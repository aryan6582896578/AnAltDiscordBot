const warn = require('../models/warn')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require(`discord.js`);

module.exports =  {
    
	data: new SlashCommandBuilder()
		.setName('warnclear')
		.setDescription('Clear All Warnings For A User')
        .addUserOption(option => option.setName('user').setDescription('Mention A User To Clear All There Warnings').setRequired(true)),


	async execute(interaction,  client, Discord) {

		const user = interaction.options.getMember('user');
       

        const perm = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
     .setDescription(`You Dont Have Permission MANAGE_MESSAGES To Run This Command`)
        if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return interaction.reply({ embeds: [perm] })

        warn.findOne({ guildid : interaction.guild.id, user: user.id}, async(err,data) => {
            if(err) throw err;
            const cw1 = new Discord.MessageEmbed() 
            .setColor('#0cfcf2')
            .setDescription(`Cleared All Warnings For ${user.user.tag} `)
            
    
            if(data) {
                await warn.findOneAndDelete({ user : user.id, guildid: interaction.guild.id})
                interaction.reply({ embeds: [cw1] })
            } else {
                const cw2 = new Discord.MessageEmbed() 
                .setColor('#0cfcf2')
                .setDescription(`No Warnings Found `)
                interaction.reply({ embeds: [cw2] })
            }
        })
    }}