//          <- Packages ->
const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });

//          <- Commands Handler ->
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) return console.log("[!!!] Commandes introuvables");
  console.log(`[OK!] [COMMANDS] ${jsfile.length} commandes ont été chargés !`);
  jsfile.forEach(f => {
    let pull = require(`./commands/${f}`);
    bot.commands.set(pull.help.name, pull);
    pull.help.aliases.forEach(alias => {
      bot.aliases.set(alias, pull.help.name);
    });
  });
});

//          <- Events Handler ->
fs.readdir("./events/", (err, eventFiles) => {
  if (err) console.error(err);
  console.log(`[OK!] [EVENTS] ${eventFiles.length} events ont été chargés !`);
  eventFiles.forEach(file => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    bot.on(eventName, event.bind(null, bot));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

//          <- Error & Login ->
bot.on("error", console.error);
bot.login(config.token);
