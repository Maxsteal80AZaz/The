const {Client, Collection, Intents, Interaction}= require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES]});
const config = require('./config.json');

const fs = require('fs');
client.commands = new Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith(".js"))

for(const file of commandFiles){ 
    const command = require(`./commands/${file}`);

    client.commands.set(command.data.name.command);
}


client.once('ready', () => {
    console.log('Ready');
});


client.on("InteractionCreate", Interaction => {
    console.log(Interaction);
});


client.on('message', async msg => {
    msg.reply("Replying to message");
});



client.login(config.token);