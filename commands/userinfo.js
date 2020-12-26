const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
  name: 'userinfo',
  aliases: ["info"],
  description: `Displays information about a user's account account.`,
  usage: 'userinfo `(user(s))`',
  execute(message, args) {
    if (!args[0]) {
      let mentionedUser = message.mentions.users.first();
      const roles = '```' + message.member.roles.cache.map((role) => role.name).join(`, `) + '```';
      const perms = '```' + message.member.permissions.toArray().join(`\n`) + '```';
      const myInfoEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('User Information')
        .setDescription(`[Avatar](${message.author.displayAvatarURL()})`)
        .addFields(
          { name: 'Username:', value: `${message.author.tag}` },
          { name: 'User ID:', value: `${message.author.id}` },
          { name: 'Account Since:', value: `${moment(message.author.createdTimestamp).format('LT')} ${moment(message.author.createdTimestamp).format('LL')} (${moment(message.author.createdTimestamp).fromNow()})` },
          { name: 'Joined At:', value: `${moment(message.member.joinedTimestamp).format('LT')} ${moment(message.member.joinedTimestamp).format('LL')} (${moment(message.member.joinedTimestamp).fromNow()})` },
          { name: `Roles: ${roles}` },
          { name: 'Permissions', value: `${perms}` }
        )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setFooter(`Command Used By: ${message.author.username}`)
        .setTimestamp();
      message.channel.send(myInfoEmbed);
      
      let avatar = message.author.displayAvatarURL;
      
    } else {
      message.mentions.members.forEach((member) => {
        const roles = '```' + member.roles.cache.map((role) => role.name).join(`, `) + '```';
        const perms = '```' + member.permissions.toArray().join(`\n`) + '```';
        const userInfoEmbed = new Discord.MessageEmbed()
          .setColor('Blue')
          .setTitle(`${member.user.username} User Information`)
          .setDescription(`[Avatar](${message.author.displayAvatarURL()})`)
          .addFields(
            { name: 'Username: ', value: `${member.user.tag}` },
            { name: 'User ID: ', value: `${member.user.id}` },
            { name: 'Roles:' `${roles}` },
            { name: 'Permissions', value: `${perms}` }
          )
          .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
          .setFooter(`Command Used By: ${message.author.username}`)
          .setTimestamp();
        message.channel.send(userInfoEmbed);
      });
    }
  }
}