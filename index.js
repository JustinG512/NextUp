const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv/config');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});


client.on('ready', () => {
    console.log('The bot is ready');
});

client.on('messageCreate', message => {

    if (message.author.bot)
   return;

    if (message.content === 'by') {
        message.reply('Playing Radiohead - Creep (Official Video) on YouTube!');
    }
});

client.login(process.env.TOKEN);