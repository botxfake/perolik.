module.exports = {
  name: 'ping',
  aliases: ["p"],
  description: "Check Your Ping",
  execute: (message, arguments, text, client) => {
    message.channel.send('Calculating ping...').then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp

      resultMessage.edit(`Calculating ping...
Your Ping: ${Math.round(message.client.ws.ping)} ms`)
    })
  },
}