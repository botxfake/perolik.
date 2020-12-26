module.exports = {
  name: "uptime",
  aliases: ["u"],
  description: "Check the uptime",
  execute(message, args) {
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    
       message.channel.send(`Uptime This Bot: **${days} day(s),${hours} hours, ${minutes} minutes, ${seconds} seconds**`)
      .catch(console.error);
  }
}