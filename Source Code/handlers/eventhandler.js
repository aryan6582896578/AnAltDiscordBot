const fs = require('fs');
module.exports = async (client, Discord ) =>{
const load_dir = (dirs) => {
 const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));

for(const file of event_files){
    const event = require(`../events/${dirs}/${file}`);
    
    const event_name = file.split('.')[0];
    client.on(event_name, event.bind(null, Discord , client));
}
}
[ 'clients', 'guild','joinleave','slashguild','slashall','rbutton','supportserver.js'].forEach(e => load_dir(e));
}