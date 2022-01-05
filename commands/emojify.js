module.exports = {
    name: 'emojify',
    description: "this is a invite link  command",
    execute( client, message  , Discord , args , cmd){
        const query = args.join(' ');
        if(!query)  return message.reply( 'Enter Text To Emojify').catch(error => {console.log(error , `emojify line 6`)})
        if(query.length > 50)return message.reply(`There Should Be Less Than 50 Characters To Emojify `).catch(error => {console.log(error , `emojify line 7`)});
        
        
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
        const text = args.join(" ").toLowerCase().split('').map(letter => {
            if(/[a-z]/g.test(letter)) {
                return `:regional_indicator_${letter}:`
            } else if (specialCodes[letter]) {
                return `${specialCodes[letter]}`
            }
            return letter;
        }).join('')//.catch(error => {console.log(error , `emojify line 34`)});

        message.channel.send({content: text}).catch(error => {console.log(error , `emojify line 36`)})

    }}