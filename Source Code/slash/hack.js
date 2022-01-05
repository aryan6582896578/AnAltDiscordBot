const { SlashCommandBuilder } = require('@discordjs/builders');
const ms = require("ms")

module.exports =  {
	data: new SlashCommandBuilder()
		.setName('hack')
		.setDescription('Hack A User')

        .addUserOption(option => option.setName('user').setDescription('Select A User To Hack')),
	async execute(interaction,  client, Discord) {
		const hacked = interaction.options.getMember('user') ;
        const user  = interaction.options.getMember('user') ;
        const you = interaction.member;
       
	const user1 = new Discord.MessageEmbed()
	.setColor('#0cfcf2')
    .setDescription(`Ok You Are Hacked Now Hack Someone Else`);
if (hacked == you) return interaction.reply({embeds:[user1]}).catch(error => {console.log(error , `/hack line 18`)});
function wait(ms){
    let start = new Date().getTime();
    let end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
    let ip1 = Math.floor(Math.random() * 255);
let ip2 = Math.floor(Math.random() * 255);
let ip3 = Math.floor(Math.random() * 255);
let ip4 = Math.floor(Math.random() * 255);
const prompt = await interaction.reply(`Started Hacking ${user ? hacked.username : hacked} `).catch(error => {console.log(error , `/hack line 30`)});
    
   await wait(2000);
     await  interaction.editReply('Searching For There Discord Email-id And Password ');
     await wait(2000);
     await interaction.editReply('Bypassing 2fa');
     await  wait(2000);
     await  interaction.editReply(`Found There Emailid :\n**Email**: \`${hacked.username}***@gmail.com\`\n**Password**: \`*******\``);
     await  wait(2000);
 await interaction.editReply('Finding IP Address');
    await wait(3000);
   await  interaction.editReply('IP Address Found Now Bypassing VPN And Firewall');
   await wait(4000);
   await  interaction.editReply('Selling Data To Hackers');
  await   wait(3000);
  
  await  interaction.editReply('Uploading Data To Public');
  await   wait(3000);
  await  interaction.editReply('Uploaded Data To Public');
  await   wait(3000);
  let embed = new Discord.MessageEmbed()
  .setColor('#0cfcf2')
  .setDescription(`Successfully Hacked   ${user ? hacked.username : hacked} \n We Found There Email-Id \n \n**Email**: \`${hacked.username}***@gmail.com\`\n**Password**: \`*******\`   \nThere IP address: ${ip1}.${ip2}.${ip3}.${ip4}\n \nTo See There Hacked File [Click Here](https://youtu.be/dQw4w9WgXcQ)\n`)
  await interaction.editReply({ embeds: [embed] }).catch(error => {console.log(error , `/hack line 53`)});
  


 
	},
};