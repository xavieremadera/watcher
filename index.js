// Import safe login function
const safe = require('./safe.js')

// Import Commands
const crypto = require('./commands/crypto')

// Library import
const Discord = require('discord.js')

// Initialize bot, set command prefix to be '!'
const watcher = new Discord.Client();
const prefix = '!'

watcher.once('ready', () => {
    console.log('Watcher is online.')
})

watcher.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if (command === 'ping') {
        message.channel.send('pong!')
    } else if (command === 'bitcoin') {
        message.channel.send('Bitcoin Price (USD) = ' + crypto.getCoin('BTC'))
    } else if (command === 'help') {
        message.channel.send('Usage:\n!bitcoin - See current Bitcoin Buy Price')
    } else {
        message.channel.send('Invalid Command. Use "!help" for a list of uses.')
    }
})


// Login with listeners active
// Function used in hidden file to hide bot token
safe.watcherLogin(watcher)