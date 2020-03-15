const Discord = require("discord.js");
const c = require("../config.json");
module.exports.run = async (bot, message, args) => {
  let kickedUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!kickedUser) {
    return message.channel.send("L'utilisateur n'existe pas !");
  }
  let kickReason = args.join(" ");
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(
      "❌ Vous n'avez pas les permissions nécessaires"
    );
  }
  if (
    kickedUser.hasPermission("MANAGE_MESSAGES") ||
    !kickedUser.roles.has(message.guild.roles.get(c.memberRole).id)
  ) {
    return message.channel.send(
      "❌ Vous ne pouvez pas soft-kick cet utilisateur. Raisons :\n\t- Permission MANAGE_MESSAGES\n\t- Rôle non trouvé"
    );
  }

  let LOG_kickEmbed = new Discord.RichEmbed()
    .setTitle("Kick")
    .setColor(c.color)
    .addField("👤 Utilisateur soft-kick", `${kickedUser} ID : ${kickedUser.id}`)
    .addField(
      "👤 Utilisateur ayant soft-kick",
      `${message.author} ID : ${message.author.id}`
    )
    .addField("💬 Salon", message.channel)
    .addField("✍ Raison", kickReason)
    .setFooter(
      bot.user.username + " • " + message.content,
      bot.user.displayAvatarURL
    )
    .setTimestamp();

  let log = bot.channels.get(c.logChannel);
  log.send(LOG_kickEmbed);
  kickedUser.removeRole(message.guild.roles.get(c.memberRole).id);
  message.react("✅");
};

module.exports.help = {
  name: "softkick",
  aliases: ["sk"],
  dsc: "Expulse un membre du serveur.",
  stx: "softkick <user> [reason]"
};
