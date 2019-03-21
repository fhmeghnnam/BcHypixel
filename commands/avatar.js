var Discord = require('discord.js'); //our discord.js library
var client = new Discord.Client(); //our bot client
var prefix = '?'; //ur bot's prefix

module.exports.run = async (bot, message, args) => {  //this is a message event. it triggers when someone sends a message in a dm or server channel.

var args = message.content.slice(prefix.length).trim().split(/ +/g) 

//this is args, the arguments in commands. For example, 
//?skiddle doodle you're now a noodle 
// would return ["doodle", "you're", "now", "a", "noodle"]

var command = args.shift().toLowerCase();

//this is our command. it can be any word with our prefix, for example: `?ping` 
//the command in this case is `ping`


// AVATAR COMMAND //

if (command === "avatar") {

var user;
user = message.mentions.users.first(); //mentioned user
if (!user) { //if no one is mentioned
if (!args[0]) {//if the command is only `?avatar` i.e. no one mentioned & no id specified
user = message.author;
getuseravatar(user)
} else { //if a user id IS specified (you need developer mode on to get it)
var id = args[0] //the id specified
client.fetchUser(id)
.then(user => {
    getuseravatar(user) //get avatar of the person with the id specified ( CAN BE ANYONE ON DISCORD! not just shared servers)
}) //get the avatar of the user
.catch(error => message.reply(error)) //reply with error if error
 }

} else { //if someone is mentioned

getuseravatar(user) //get the avatar of mentioned user 

}

function getuseravatar(user) {

    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setImage(user.avatarURL)
    message.channel.send(embed)
}

}



};

module.exports.help = {
    name: "avatar"
  }