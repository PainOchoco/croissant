module.exports = async (bot, message) => {
  console.log(`
    ██████╗██████╗  ██████╗ ██╗███████╗███████╗ █████╗ ███╗   ██╗████████╗
    ██╔════╝██╔══██╗██╔═══██╗██║██╔════╝██╔════╝██╔══██╗████╗  ██║╚══██╔══╝
    ██║     ██████╔╝██║   ██║██║███████╗███████╗███████║██╔██╗ ██║   ██║   
    ██║     ██╔══██╗██║   ██║██║╚════██║╚════██║██╔══██║██║╚██╗██║   ██║   
    ╚██████╗██║  ██║╚██████╔╝██║███████║███████║██║  ██║██║ ╚████║   ██║   
     ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝                                                                              
  `);
  // Activities
  bot.user.setActivity(`reboot 🔄`, { type: "Playing" });
  setTimeout(game2, 5000);

  function game1() {
    bot.user.setActivity(`mc.laboulangerie.xyz ⛏`, { type: "Playing" });
    setTimeout(game2, 5000);
  }

  function game2() {
    bot.user.setActivity(`avec des blocs 🏠`, { type: "Playing" });
    setTimeout(game3, 5000);
  }

  function game3() {
    bot.user.setActivity(`>help`, { type: "Playing" });
    setTimeout(game1, 5000);
  }
};
