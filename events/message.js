const config = require("../config.json");
const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (bot, message, reaction) => {
  if (message.author.bot) return;

  var prefix = config.prefix;

  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (prefix == command.slice(0, 1)) {
    let commandFile =
      bot.commands.get(command.slice(prefix.length)) ||
      bot.commands.get(bot.aliases.get(command.slice(prefix.length)));
    if (commandFile) commandFile.run(bot, message, args);
  }

  // * Swear Words Detector

  const swearWords = [
    "conasse",
    "pute",
    "fdp",
    "chocolatine",
    "pd",
    "ntm",
    "bite",
    "niquer",
    "ta mère",
    "salope",
    "trou du cul",
    "batard",
    "connard",
    "connasse",
    "enculé",
    "couille",
    "triso",
    "nigga"
  ];

  if (
    swearWords.some(
      word =>
        message.content.toLowerCase().includes(" " + word + " ") ||
        message.content.toLowerCase().startsWith(word) ||
        message.content.toLowerCase().endsWith(" " + word)
    )
  ) {
    message.delete();
    message.channel.send(
      "⚠ Désolé **" +
        message.author.tag +
        "**, fait attention à ce que tu dis !"
    );
  }

  // * New Members Role

  if (
    message.channel.id == message.guild.channels.get(config.role).id &&
    message.content.toLowerCase() == "lu et approuvé"
  ) {
    message.member.addRole(message.guild.roles.get(config.memberRole).id);
    message.react("✅");
    message.delete(2500);
    message.author.send("Bienvenue sur le serveur Discord de La Boulangerie !");

    let lc = bot.channels.get(config.logChannel);
    let logEmbed = new Discord.RichEmbed()
      .setColor("#ffa500")
      .setAuthor(`🍞 ${message.member.displayName}`)
      .setDescription(
        message.author.tag + " est devenu <@&688357249646592001>"
      );
    lc.send(logEmbed);
  }
};
