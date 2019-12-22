const Discord = require('discord.js')
const bot = new Discord.Client()
const token = "Your Token Here";
const colors = require('colors')

bot.on("ready", () => {
    console.log(`${bot.user.username} is online in ${bot.guilds.size} servers!`.red.bold)
    bot.user.setActivity("Dabbing on them haters")
    bot.user.setAFK(true)
});

bot.on("guildCreate", async guild => {
    console.log(`Bot has joined ${guild} with ID ${guild.id}`.gray.bold)
})

bot.on("message", async message => {
    const msg = message
    const isIam = msg.content.startsWith("I'm") || msg.content.startsWith("Im") || msg.content.startsWith("I am") || msg.content.startsWith("im") || msg.content.startsWith("i am")
    if(isIam){
        try {
            message.channel.send(`Hi \`${message.content}\`, I'm Dad`)
            await message.channel.send(`https://mainbot.xyz/assets/DabBot.jpg`) // Image of the Dab emoji
        } catch (err) {
            console.error()
        }
    }
})

try {
    bot.login(token).catch(err=>console.log(err))
} catch (error) {
    console.error()
}