const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'yourserverip.com', // put server IP
  port: 25565,              // default Minecraft port
  username: 'email@example.com', // cracked account name or email
  version: '1.21'
})

bot.on('spawn', () => {
  bot.chat('/login yourpassword')
  setTimeout(() => {
    bot.chat('/server orange')
    setTimeout(() => {
      bot.chat('/warp afk')
    }, 5000)
  }, 5000)
})
