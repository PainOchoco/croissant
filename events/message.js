const config = require("../config.json");
const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (bot, message, reaction) => {
  if (message.author.bot) return; //ignore bots

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
};
