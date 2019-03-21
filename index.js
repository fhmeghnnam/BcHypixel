const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
let coins = require("./coins.json");
let xp = require("./xp.json");
let purple = botconfig.purple;
const avatar = require('./commands/avatar');
module.exports = avatar;
const help = require('./commands/help');
const auth = require('./auth.json');
const { Client, RichEmbed, Collection } = require('discord.js');


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("ThatsMeFhme", {type: "WATCHING"});

});


bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .addField("💸", `${coinAmt} coins added!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor(purple)
    .addField("New Level", curlvl + 1);
    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });

  let prefix = "!";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

 
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});






fs.readdir('./Commands',function(err, files) {
  if(err) console.log(err);
  let cmds = files.filter(r => r.split('.').pop() === 'js');
  if(cmds.length <= 0) return console.log(`# Broadcast: ${chalk.red("0 Commands to load.")}`);
  cmds.forEach(r => {
      let cmd = require(`./Commands/${r}`);
      try {
          bot.commands.set(cmd.help.name, cmd);
          console.log(`# Broadcast: ${chalk.green(`Successfully loaded`)} ${chalk.bold.gray(r)}`);
      } catch(e) {
          if(e) return console.log(`هااي`);
      }
  });
});






bot.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  let args = message.content.split(" ");
  if(!message.content.startsWith(auth.prefix));
  let cmd = client.commands.get(args[0].slice(auth.prefix.length));
  let emojis = {
    yes: `${bot.guilds.get(auth.emojisId).emojis.find(r => r.name === "Yes")}`,
    wrong: `${bot.guilds.get(auth.emojisId).emojis.find(r => r.name === "Wrong")}`,
    settings: `${bot.guilds.get(auth.emojisId).emojis.find(r => r.name === "Settings")}`,
    warn: `${bot.guilds.get(auth.emojisId).emojis.find(r => r.name === "Warn")}`
  };
  if(cmd) cmd.run(bot, message, args.slice(1), RichEmbed, emojis);
});














bot.login(process.env.BOT_TOKEN)
