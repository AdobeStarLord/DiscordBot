const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '^';

bot.on('ready', () => {
    bot.user.setActivity('discord.js', { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
    bot.user.setPresence({ activity: { name: 'With My Bank Account' }, status: 'online' })
      .then(console.log)
      .catch(console.error);
});
bot.on("message", message =>{
    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();
    if(command ==='telanthric') {
        const telanthric = new Discord.MessageEmbed()
        .setColor(0x0008ff)
        .setTitle('Subcribe To Telanthric')
        .setURL('https://www.youtube.com/channel/UCEvC-HQ7ST5h8iC1IDgVtgw')
        .setDescription('Click The Link To Subcribe')
        .setAuthor(message.author.username)
        .addField('Are You A Pro?', 'Subscribe To Become Ultimate Pro.')
        .setThumbnail('https://i.imgur.com/5rhIXGU.png%27')
        .setFooter('Thank you For Supporting The Channel!')
        .setTimestamp()
     try {
         message.author.send(telanthric);
      } catch {
          message.reply('I was unable to message you in private make sure your dms are set to public')
      }    
    } 
})

bot.login(procces.env.token);