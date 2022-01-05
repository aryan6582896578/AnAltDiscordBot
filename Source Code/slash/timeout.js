const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require(`discord.js`);
const ms = require("ms")
module.exports =  {
	data: new SlashCommandBuilder()
		.setName('timeout')
		.setDescription('timeout user')
		
        .addUserOption(option => option.setName('user').setDescription('Select A User To Timeout').setRequired(true))
        .addStringOption(option => option.setName('time').setDescription('Enter Time For Timeout').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Reason For Timeout').setRequired(true)),
	async execute(interaction,  client, Discord) {
		const user = interaction.options.getMember('user');
        const time = interaction.options.getString('time');
        const reason = interaction.options.getString('reason');
const member = interaction.guild.members.cache.get(user.id);

        const userpermission = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(`You Dont Have Permission To Timeout A User Missing Permission: MODERATE_MEMBERS || Timeout Members `)
		if(!interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return interaction.reply({embeds: [userpermission]})
       
		const botpermission = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(`I Dont Have Permission To Timeout A User Missing Permission: MODERATE_MEMBERS || Timeout Members `)
		if(!interaction.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return interaction.reply({embeds: [botpermission]})
        
		const botrole = interaction.guild.members.resolve(client.user).roles.highest.position;
		const userrole = interaction.guild.members.resolve(user).roles.highest.position;
		const owner = interaction.guild.ownerId;
		const smu = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(`You Cannot Timeout Yourself`)
const sm = interaction.member;
if (sm == user) return interaction.reply  ({ embeds: [smu] }).catch(error => {console.log(error )});
		const higherrole = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(`${user} Role Is Higher Than My Role So I Cannot Timeout`)
        if(botrole < userrole) return interaction.reply  ({ embeds: [higherrole] })

        const  samerole = new Discord.MessageEmbed()
        .setColor('#0cfcf2')
        .setDescription(`${user} Has Same Role As Me So I Cannot Timeout `)
			if(botrole == userrole) return interaction.reply({ embeds: [samerole] })

			const  oowner= new Discord.MessageEmbed()
        .setColor('#0cfcf2')
        .setDescription(`You Cannot Timeout The Server Owner`)
			if(user == owner) return interaction.reply({ embeds: [oowner] })

			const limit = new Discord.MessageEmbed() 
			.setColor('#0cfcf2')
			.setDescription(`Timeout should be less than 1 week`)
			

			const lessthanzero = new Discord.MessageEmbed() 
			.setColor('#0cfcf2')
			.setDescription(`Timeout Should Be More Or Equal To 0 seconds`)
			if(time < 0) return interaction.reply({ embeds: [lessthanzero] });


			const tmout = new Discord.MessageEmbed()
			.setColor('#0cfcf2')
			.setDescription(` ${user} Has Been Timeout for ${time} Reason - ${reason}`)


            const  tc= new Discord.MessageEmbed()
            .setColor('#0cfcf2')
            .setDescription(`Mention Vaild Time | 1s , 1h ,1d , 1w `)
            const timecheck = ms(time)
	
            if (!timecheck)  return interaction.reply({ embeds: [tc] })
			if (timecheck  > 604800000 ) return interaction.reply({ embeds: [limit] })
member.timeout(timecheck , reason);
await interaction.reply({ embeds: [tmout]});
	},
};