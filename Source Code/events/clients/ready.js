module.exports = (Discord,client) =>{

const channel1 = client.channels.cache.get('904676057980997632')

channel1.send(`Analt Is Up And Running ${client.guilds.cache.size} Servers | ${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b).toLocaleString()} Members`)

console.log('AnAlt Is Up And Running')
     

 
client.user.setActivity(`@AnAlt | /help` ,{type: "LISTENING"})//)
            
            
          
          
          
  }