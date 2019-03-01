const Discord = require("discord.js");
const client = new Discord.Client(); 
var prefix = "!!";


client.on('message', message => {
if(message.author.bot) return;
if(message.channel.type === 'dm') {
    messgae.reply ('private message not allow');

    let BanMem = message.mentions.users.first();
let sbb = message.content.split(" ").slice(2).join(" ");
let banslog = client.channels.find("name", "ban-log");

}
if(message.content.startsWith(prefix +'ban')) {
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return
    message.reply("**you dont have `Ban_Member` Perm").then(message.delete(4000));
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return
    message.reply("i dont have perm").then(message.delete(4000));
    if(!banslog) return
    message.reply("must to ccreate channel named **ban-log**").then(message.delete(4000));
    if(message.mentions.users.size < 1) return message.reply("**you must to mention**").then(message.delete(4000));
    if(!sbb) return message.reply ("**you must to write the reason**").then(message.delete(4000));
    if(!message.guild.member(BanMem).bannable)
    message.reply("bot rule must to be higher than the player who you want to ban him").then(message.delete(4000));
    message.guild.member(BanMem).ban(7, BanMem);

    const banlogembed = new Discord.RichEmbed()
    .setAuthor(`banned`, user.displayAvatarURL)
    .setColor("RANDOM")
    .setTimestamp()
    .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
    .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
    .addField("**Reason:**", '**[ ' + `${sbb}` + ' ]**')
    message.channel.send({
      embed : banlogembed
    })


}  
});

client.login(process.env.BOT_TOKEN);
   
       

        client.login(process.env.BOT_TOKEN);
 
        
