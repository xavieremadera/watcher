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
    }
})


// Login with listeners active
watcher.login('NzQzMTUzMDA3NTM3MTYwMjU1.XzQhLA.640kwnIQKzsEK2e5qaY8Xguadx0');