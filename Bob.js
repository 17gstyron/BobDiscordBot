const Discord = require('discord.js');
const { token } = require('./config');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bob') {
    msg.reply('Hello I am still learning and am of no use to you yet');
  }
});

client.login(token);