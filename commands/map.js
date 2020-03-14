const Discord = require("discord.js");
const c = require("../config.json");

module.exports.run = async (bot, message, args) => {
  let mapEmbed = new Discord.RichEmbed()
    .setColor(c.color)
    .setTitle("Map: https://laboulangerie.xyz/mcmap")
    .setFooter(
      bot.user.username + " • " + message.content,
      bot.user.displayAvatarURL
    )
    .setTimestamp();
  message.channel.send(mapEmbed);
};

module.exports.help = {
  name: "map",
  aliases: ["mcmap"],
  dsc: "Affiche l'URL pour la map du serveur Minecraft",
  stx: "map"
};
