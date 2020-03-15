const Discord = require("discord.js");
const c = require("../config.json");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("❌ Vous n'avez pas les permissions nécéssaires");
  if (!args[0])
    return message.reply("Veuillez entrer le nombre de messages à supprimer");
  message.channel.bulkDelete(args[0]).then;

  const lC = bot.channels.get(c.logChannel);
  let logEmbed = new Discord.RichEmbed()
    .setColor(c.color)
    .setTitle("Suppression de messages par " + message.author.tag)
    .setDescription(
      args[0] + " messages ont été supprimés dans #" + message.channel.name
    )
    .setTimestamp();

  lC.send(logEmbed);
};

module.exports.help = {
  name: "clear",
  aliases: [],
  dsc: "Supprime une quantité de message définie.",
  stx: "clear <number>"
};
