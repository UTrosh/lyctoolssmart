module.exports = {
    name: 'help',
    description: 'Get information about all commmands',
    usage: 'help',
    execute: function (args, term, util) {
        return new Promise((resolve, reject) => {
            term.gray("Voici la liste des commandes : \n")
            term.gray('——————————————————————————————————\n');
            for (const commandName in util("getCommandList")) {
                if (util("getCommandList").hasOwnProperty(commandName)) {
                  const commandData = util("getCommandList")[commandName];
                  term.white(`Commande : ${commandData.name} | ${commandData.description}`)
                  term.gray('\n——————————————————————————————————\n');
                }
              }
            resolve()
        })
    },
  };