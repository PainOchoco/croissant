const Discord = require("discord.js");
const c = require("../config.json");

module.exports = async (bot, member) => {
  const wC = bot.channels.get(c.welcome);
  const lC = bot.channels.get(c.logChannel);
  let wEmbed = new Discord.RichEmbed()

    .setAuthor(`👋 Bienvenue ${member.displayName} !`)
    .setColor("#00bf00");
  wC.send(wEmbed);

  let logEmbed = new Discord.RichEmbed()
    .setAuthor(`➡ ${member.displayName}`)
    .setDescription(
      member.guild.memberCount + " membres sur " + member.guild.name
    )
    .setColor("#00bf00");
  lC.send(logEmbed);
};
