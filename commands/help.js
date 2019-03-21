const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.bot) return;
     if (message.content === "!" + "help") {
         message.channel.send('**The Message Was Sent On Private**').then(msg => {msg.delete(5000)});
            
	
		 


 message.author.sendMessage(`
 
╔[❖════════════❖]╗
             Prefix = ' ! '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝

 ❖ !kick <mention > < reason >  ➾ kick member from server

 ❖ !ban <mention > < reason >  ➾ ban member from the server

 ❖ !clear ➾ clear chat 
 
 ❖ !tempmute < mention > < time > < reason >  ➾ mute member

 ❖ !addroll <number> ➾ role 

 ❖ !ct <name> ➾ create channel 

 ❖ !cv <name> create voice channel 
  
 ❖ !bc <message> ➾ message all members in server 


╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝

❖ *date ➾ see date < not open yet > 

❖ !botinfo ➾ members info

❖ !avatar ➾ your avatar account

❖ !level ➾ to see your level 

❖ !coins ➾ to see your coins

❖ !ping ➾ to see ping

❖ !botinfo ➾ bot informations 

❖ !serverinfo ➾ server informations 

❖ !help ➾ help list

╔[❖════════════❖]╗
                    Welcome
╚[❖════════════❖]╝



==================================================================

Server support: https://discord.gg/9yrfM5Z

==================================================================

bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=545334160336617499&permissions=8&scope=bot

==================================================================

`);

    }
};



module.exports.help = {
    name:"help"
  }