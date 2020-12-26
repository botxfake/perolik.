const Discord = require('discord.js');
 
module.exports = {
    name: 'avatar',
    aliases: ["av"],
    description: 'check apatar',
    usage: "avatar [@user | user ID]",
    execute(message, args){
        const { prefix, token } = require ('../config.json');
        const embed = new Discord.MessageEmbed()
          if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
 
        if(!message.mentions.users.first()){
            embed.setTitle(`${user.username} Avatar`)
            .setDescription(`[Avatar](${message.author.displayAvatarURL()})`)
            embed.setImage(avatar)
            embed.setColor("#00b8e6")
            return message.channel.send(embed)
        }
        const avatarother = new Discord.MessageEmbed()
  .setTitle(`${user.username} Avatar`)
  .setDescription(`[Avatar](${avatar})`)
  .setColor("RANDOM")
  .setImage(avatar)
  
  return message.channel.send(avatarother);
} 
}