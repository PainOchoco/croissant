const Discord = require("discord.js");
const c = require("../config.json");
module.exports.run = async (bot, message, args) => {
  const command = bot.commands.get(args.join(" "));

  if (!args.join(" ")) {
    const cmds = bot.commands.map(cmd => cmd.help.name).join(", ");

    let helpEmbed = new Discord.RichEmbed()
      .setTitle("Page d'aide")
      .setColor(c.color)
      .addField(
        bot.commands.map(cmd => cmd.help.name).length +
          " commandes disponibles",
        cmds
      )
      .setFooter(
        bot.user.username + " • " + message.content,
        bot.user.displayAvatarURL
      )
      .setTimestamp();

    message.channel.send(helpEmbed);
  } else if (bot.commands.has(args.join(" "))) {
    let helpEmbedCommand = new Discord.RichEmbed()
      .setTitle(`Page d'aide de la commande **${command.help.name}**`)
      .setColor(c.color)
      .setFooter(
        bot.user.username + " • " + message.content,
        bot.user.displayAvatarURL
      )
      .setTimestamp();

    if (command.help.dsc) {
      helpEmbedCommand.addField(`Description`, `${command.help.dsc}`, true);
    }
    if (command.help.stx) {
      helpEmbedCommand.addField(`Syntaxe`, `\`${command.help.stx}\``, true);
    }
    if (command.help.aliases) {
      helpEmbedCommand.addField(
        `Aliase(s)`,
        command.help.aliases.length > 0 ? command.help.aliases : "Aucune",
        true
      );
    } else {
      helpEmbedCommand.addField(
        `**Erreur** • Aucune information détectée pour la commande **${command.help.name}`
      );
    }

    message.channel.send(helpEmbedCommand);
  }
};

module.exports.help = {
  name: "help",
  aliases: ["?"],
  dsc: "Affiche les commandes du bot",
  stx: "help [command]"
};
