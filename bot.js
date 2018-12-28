const Discord = require('discord.js');
const devs = ['389090790984515594'];
const db = require('quick.db');
const premium = ['470896018603376640']
const client = new Discord.Client();   
const bot = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 
const prefix = '!';
var table = require('table').table
var ti={}  
,spee={}
,attentions={};



client.on('message', message => {
    var prefix = "!";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
        let args = message.content.split(' ').slice(1).join(' ');
       if(!message.member.hasPermission('ADMINISTRATOR')) return;

    if(message.content.split(' ')[0] == prefix + 'bc') {

        if (!args[1]) {
    message.channel.send("**!bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       var bc = new Discord.RichEmbed()
       .addField( `${message.guild.name}`,  m)
       .addField('From : ', `${message.author.username}`)
       .addField(' Message ', args)
       .setColor('RANDOM')
       m.send({embed: bc});
            });
        }
        } else {
            return;
        }
        
        
        client.login(process.env.BOT_TOKEN);
