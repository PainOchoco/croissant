const Discord = require("discord.js");
const request = require("request");
const c = require("../config.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let ip = "mc.laboulangerie.xyz";
  let url = "https://mcapi.us/server/status?ip=" + ip;

  request(url, function(err, response, body) {
    if (err) {
      console.error(err);
      message.channel.send("`[ERR] [STATUS.JS] CANNOT_REQUEST_MCAPI`");
    }
    body = JSON.parse(body);

    let mcEmbed = new Discord.RichEmbed()
      .setTitle("Statut de La Boulangerie Minecraft 🥖")
      .setColor(c.color)
      .setDescription(
        "**" + body.online ? "✅ En ligne" : "🛑 Hors ligne" + "**" + "\n"
      )
      .addField("Version", body.server["name"], true)
      .addField(
        "Joueurs",
        body.players["now"] + "/" + body.players["max"],
        true
      );
    message.channel.send(mcEmbed);
  });
};

module.exports.help = {
  name: "status",
  aliases: ["mc"],
  dsc: "Affiche le statut et les informations du serveur",
  stx: "status"
};
