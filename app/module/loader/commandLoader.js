const fs = require('fs');
const path = require('path');

function loadCommands() {
  const commands = {};

  const commandsDir = path.join(__dirname, '../commands');
  const commandFiles = fs.readdirSync(commandsDir);

  for (const file of commandFiles) {
    if (file.endsWith('.js')) {
      const commandData = require(path.join(commandsDir, file));
      commands[commandData.name] = commandData;
    }
  }

  return commands;
}

module.exports = loadCommands();