const warn = require('../models/warn')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require(`discord.js`);

module.exports =  {
    
	data: new SlashCommandBuilder()
		.setName('warn')
		.setDescription('Warn A User')
        .addUserOption(option => option.setName('user').setDescription('Mention A User To Warn').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Reason For Warning ').setRequired(true)),

	async execute(interaction,  client, Discord) {

		const user = interaction.options.getMember('user');
        const reason = interaction.options.getString('reason');

        const perm = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
     .setDescription(`You Dont Have Permission MANAGE_MESSAGES To Run This Command`)
        if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return interaction.reply({ embeds: [perm] })

        const oowner = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
     .setDescription(`Cannot Warn The Server Owner`)

        const owner = interaction.guild.ownerId;
        if(user == owner) return interaction.reply({ embeds: [oowner] })

        const bot = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
     .setDescription(`Cannot Warn Myself`)

        if( user == "780294659977117718")
        return interaction.reply({ embeds: [bot] })

		const limit = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(` Reason Description Should Be Less Than 50 Characters`) 
       if(reason.length > 50) return interaction.reply({ embeds: [limit] });

        warn.findOne(  { guildid: interaction.guild.id, user: user.id }, async(err, data) => {
           
            if(err) throw err;
            if(!data) {
                data = new warn({
                    guildid: interaction.guild.id,
                    user: user.id ,
                    content : [
                        {
                            moderator : interaction.member.id,
                            reason : reason
                        }
                    ]
                })
            } else {
                const obj = {
                    moderator: interaction.member.id,
                    reason : reason
                }
                data.content.push(obj)
            }
            data.save()
        })

        const w2 = new Discord.MessageEmbed() 
        .setColor('#0cfcf2')
        .setTitle('Warned')
        .setDescription(`${user} Has Been Warned  Reason: ${reason} `)
        .setTimestamp()
        interaction.reply({ embeds: [w2] })
    
	}}