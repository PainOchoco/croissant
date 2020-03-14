const Discord = require("discord.js");
const c = require("../config.json");

module.exports.run = async (bot, message, args) => {
  let ipEmbed = new Discord.RichEmbed()
    .setTitle("IPs du serveur")
    .setColor(c.color)
    .setDescription(
      "Officielle : `mc.laboulangerie.xyz`\nIPv4 : `62.210.45.12:10006`"
    )
    .setFooter(
      bot.user.username + " • " + message.content,
      bot.user.displayAvatarURL
    )
    .setTimestamp();
  message.channel.send(ipEmbed);
};

module.exports.help = {
  name: "ip",
  aliases: [],
  dsc: "Affiche l'IP du serveur Minecraft",
  stx: "ip"
};
