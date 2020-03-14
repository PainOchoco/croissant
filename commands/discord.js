const Discord = require("discord.js");
const c = require("../config.json");

module.exports.run = async (bot, message, args) => {
  let discordEmbed = new Discord.RichEmbed()
    .setTitle("Discord: https://laboulangerie.xyz/discord")
    .setColor(c.color)
    .setFooter(
      bot.user.username + " • " + message.content,
      bot.user.displayAvatarURL
    )
    .setTimestamp();
  message.channel.send(discordEmbed);
};

module.exports.help = {
  name: "discord",
  aliases: ["dsc"],
  dsc: "Affiche l'URL du Discord",
  stx: "discord"
};
