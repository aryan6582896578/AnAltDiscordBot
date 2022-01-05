const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require(`discord.js`);
module.exports =  {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kick A User From The Serevr')

        .addUserOption(option => option.setName('user').setDescription('Select A User To kick From The Server').setRequired(true)),
	async execute(interaction,  client, Discord) {
		const user = interaction.options.getMember('user');

        const userpermission = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(`You Dont Have Permission To Kick A User Missing Permission: KICK_MEMBERS `)
		if(!interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return interaction.reply({embeds: [userpermission]}).catch(error => {console.log(error , `/kick line 15`)});
       
		const botpermission = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(`I Dont Have Permission To Kick A User Missing Permission: KICK_MEMBERS  `)
		if(!interaction.guild.me.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return interaction.reply({embeds: [botpermission]}).catch(error => {console.log(error , `/kick line 20`)});
        
		const botrole = interaction.guild.members.resolve(client.user).roles.highest.position;
		const userrole = interaction.guild.members.resolve(user).roles.highest.position;
		const owner = interaction.guild.ownerId;
		const smu = new Discord.MessageEmbed()
	    .setColor('#0cfcf2')
        .setDescription(`You Cannot Kick Yourself`)
const sm = interaction.member;
if (sm == user) return interaction.reply  ({ embeds: [smu] }).catch(error => {console.log(error )});
	
        if(botrole < userrole) return interaction.reply  ({ embeds: [higherrole] }).catch(error => {console.log(error , `/kick line 29`)});

        const  samerole = new Discord.MessageEmbed()
        .setColor('#0cfcf2')
        .setDescription(`${user} Has Same Role As Me So I Cannot Kick Them `)
			if(botrole == userrole) return interaction.reply({ embeds: [samerole] }).catch(error => {console.log(error , `/kick line 34`)});

			const  oowner= new Discord.MessageEmbed()
        .setColor('#0cfcf2')
        .setDescription(`You Cannot Kick The Server Owner`)
			if(user == owner) return interaction.reply({ embeds: [oowner] }).catch(error => {console.log(error , `/kick line 39`)});

			const kickmessage = new Discord.MessageEmbed()
			.setColor('#0cfcf2')
			.setDescription(` ${user} Has Been Kicked From The Server By ${interaction.member}`)
user.kick().catch(error => {console.log(error , `/kick line 44`)});
await interaction.reply({ embeds: [kickmessage]}).catch(error => {console.log(error , `/kick line 45`)});
	},
};