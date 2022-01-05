const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports =  {
    
	data: new SlashCommandBuilder()
		.setName('emojify')
		.setDescription('Emojify Your Message')

        .addStringOption(option => option.setName('message').setDescription('Enter Your Message To Emojify').setRequired(true)),
	async execute(interaction,  client, Discord) {
		
        const string = interaction.options.getString('message');
        const message = new Discord.MessageEmbed()
        .setColor('#0cfcf2')
        .setDescription(`There Should Be Less Than 50 Characters To Emojify `)
        if(string.length > 50) return interaction.reply({embeds:[message]}).catch(error => {console.log(error , `/emojify line `)});

        const specialCodes = {
            '0': ':zero:',
            '1': ':one:',
            '2': ':two:',
            '3': ':three:',
            '4': ':four:',
            '5': ':five:',
            '6': ':six:',
            '7': ':seven:',
            '8': ':eight:',
            '9': ':nine:',
            '#': ':hash:',
            '*': ':asterisk:',
            '?': ':grey_question:',
            '!': ':grey_exclamation:',
            ' ': '   '
          }
        const text = string.toLowerCase().split('').map(letter => {
            if(/[a-z]/g.test(letter)) {
                return `:regional_indicator_${letter}:`
            } else if (specialCodes[letter]) {
                return `${specialCodes[letter]}`
            }
            return letter;
        }).join('')

 


	await interaction.reply({ content: text , ephemeral: false }).catch(error => {console.log(error , `/emojify line 48`)});

 

	},
};