const Discord = require("discord.js");
const c = require("../config.json");

module.exports.run = async (bot, message, args) => {
  let infoEmbed = new Discord.RichEmbed()
    .setTitle("Informations")
    .setColor(c.color)
    .setDescription(
      "▸ `mc.laboulangerie.xyz`\n▸ [Discord](https://laboulangerie.xyz/discord)\n▸ [Map](https://laboulangerie.xyz/mcmap)"
    )
    .setFooter(
      bot.user.username + " • " + message.content,
      bot.user.displayAvatarURL
    )
    .setTimestamp();
  message.channel.send(infoEmbed);
};

module.exports.help = {
  name: "info",
  aliases: ["i"],
  dsc: "Affiche les information",
  stx: "info"
};
