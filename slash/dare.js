
const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('dare')
		.setDescription('A Truth And Dare Command'),
	async execute(interaction,  client, Discord) {
        let flip1= ["Change your discord status to `it was a dare`","block your last dm until they notice ","join our support server <https://discord.gg/2YJxNtmpAd>","Let the rest of the group DM someone from your Instagram account","Show the last text you sent to someone through dm","Send a screenshot of your phone browser history from the last 24 hours","Send your 5th dm something embarrassing","Block the 8th person in your dms for 30 mins","Don’t charge your phone till 1%","Make a new emoticons","Have a matching profile picture with someone for 24 hours","Tell your 3rd dm that you love them","Show the list of people in your dm list","Take a screenshot of your most played songs and put it here","Tell your funniest joke ","Tell your worst joke","Delete the last 2 pictures you clicked","Sing a song!","Send the link of the last youtube video you watched","Write a short poem","Call a random phone number ","Give us 5 minutes of stand up comedy","Listen to your least favorite song","Send your favorite youtube/tik tok video","Send your favorite song","Change your status to “dm me” for a day","Send your 2nd dm the pleading emoji","Tell your best pick up lines","Use your best pick up line on your 1st dm","Switch to discord light mode for the rest of the day","Send the last song you heard","Show everyone something you made/drew when you were younger","Sing a song of your choice in voicechannel","Show everyone your funniest meme","Spam the 5th person in your dm list `it was a dare`for 30 seconds","List your top 5 dms as animals you seem them as","List your top 5 dms as animals you seem them as","Change your nickname to anything the group wants","Show your screen time","Ghost ping server admins","List the things on your desk","Lyric prank someone with the song “You belong with me”","Choose 3 people and tell them your latest lie","your latest lie","Ghost ping the person you like","Spam your 8th dm with the last text you sent besides the command","Show everyone your suggested emoji list","Have someone ask you a question that you must answer","Use your non-dominant hand for the next 10 minutes","Let your 3rd dm decide your status for 24 hours","Name one thing you would change about your best friend","Rate your 7th dm 1-10 in terms of personality","Don’t touch your phone for an hour once this game is over","Share one of your playlists","Text the last 3 people in your dms I love you","Unfriend 3 friends for 1 hour ","Send your crush a 'What's up?’",
        "Tweet something blindfolded","Rate everyone here 1-10 in terms of looks","Slap your face","Propose to someone in the group","Show the group a picture of one person you find very attractive","Write a love poem to the first person in the offline list",""];
        const flip2 = flip1[Math.floor(Math.random() * flip1.length)];
        const flipped = new Discord.MessageEmbed()
    .setColor('#0cfcf2')
    .setTitle("Dare", )
    .setDescription(` ${flip2}`) 
    .setTimestamp()
    .setFooter(interaction.user.tag);
		await interaction.reply({embeds:[flipped] }).catch(error => { console.log(error , `dare line 19`)});
	},
}; 