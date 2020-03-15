const Discord = require("discord.js");
const c = require("../config.json");

module.exports = async (bot, member) => {
  const wC = bot.channels.get(c.welcome);
  const lC = bot.channels.get(c.logChannel);
  let wEmbed = new Discord.RichEmbed()

    .setAuthor(`👋 A bientôt ${member.displayName} !`)
    .setColor("#ff0000");
  wC.send(wEmbed);

  let logEmbed = new Discord.RichEmbed()
    .setAuthor(`⬅ ${member.displayName}`)
    .setDescription(
      member.guild.memberCount + " membres sur " + member.guild.name
    )
    .setColor("#ff0000");

  lC.send(logEmbed);
};
