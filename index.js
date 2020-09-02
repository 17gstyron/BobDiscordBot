const Discord = require('discord.js')
const { token, finnhubToken } = require('./config')
const client = new Discord.Client()
const axios = require('axios')
const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = `${finnhubToken}` // Replace this
const finnhubClient = new finnhub.DefaultApi()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bob') {
    msg.reply('Hello I am still learning and am of no use to you yet')
    finnhubClient.supportResistance("AAPL", "D", (error, data, response) => {
      console.log(data)
    });
  }
})

client.login(token)