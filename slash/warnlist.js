const warn = require('../models/warn')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require(`discord.js`);

module.exports =  {
    
	data: new SlashCommandBuilder()
		.setName('warnlist')
		.setDescription('Warnlist For A User')
        .addUserOption(option => option.setName('user').setDescription('Mention A User To Get Warn List').setRequired(true)),


	async execute(interaction,  client, Discord) {

		const user = interaction.options.getMember('user');
       

        const perm = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
     .setDescription(`You Dont Have Permission MANAGE_MESSAGES To Run This Command`)
        if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return interaction.reply({ embeds: [perm] })

        warn.findOne({ guildid: interaction.guild.id, user: user.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
    
                const wl1 = new Discord.MessageEmbed() 
                .setColor('#0cfcf2')
                .setTitle(`Warnings `)
                .setDescription(data.content.map(
                        (w, i) => `\`${i + 1}\` | Moderator : ${interaction.guild.members.cache.get(w.moderator).user.tag}\nReason : ${(w.reason)}`).slice(0, 10).join('\n'))
                        .addField('Note','Because Of Some Problem You Can Only See 10 Warnings Sorry For The Problem It Will Be Fixed ', true)
                        .setTimestamp()
                    .setFooter(`${user.user.tag}`);
     interaction.reply({ embeds: [wl1] })
    
     } 
  else {
                const wl2 = new Discord.MessageEmbed() 
                .setColor('#0cfcf2')
                .setDescription(`No Warnings Found`)
                interaction.reply({ embeds: [wl2] })
            }
    
        })

    }}