const term = require('terminal-kit').terminal;
const terminalutil = require('./util/terminal');
const commands = require('./module//loader/commandLoader');


function startTerminal() {
    term.grabInput({ mouse: 'button' });
  
    term.on('key', function (name, matches, data) {
      if (name === 'CTRL_C') {
        terminalutil.terminate(term);
      }
    });
  
    function displayCommands() {
      for (const commandName in commands) {
        const commandData = commands[commandName];
        term.brightBlue(`Loaded command: ${commandData.name}\n`);
      }
    }
    term.brightBlue('Commands loaded at startup:\n');
    displayCommands();
    term(`root@lyctools > `);
    const commandNames = [];

for (const commandName in commands) {
  if (commands.hasOwnProperty(commandName)) {
    commandNames.push(commands[commandName].name);
  }
}

let autocomplete = commandNames;

    function processUserInput() {
      term.inputField({autoComplete: autocomplete, autoCompleteHint: true, autoCompleteMenu: true  }, async function (error, response) {
        if (!response) {
          term.red('\nSpecify a command or write help !');
          processUserInput(); // Continue à attendre l'entrée de l'utilisateur
        } else {
          const inputTokens = response.trim().split(' '); // Divise l'entrée en mots

          const commandName = inputTokens[0];
          const args = inputTokens.slice(1).join(' '); // Récupère les arguments restants
    
          const commandData = commands[commandName];
    
          if (commandData) {
            term('\n')
            await commandData.execute(args, term, util);
            term.white(`\nroot@lyctools > `);
            processUserInput();
          } else {
            term.red('\nInvalid command \n');
            term(`root@lyctools > `);
            processUserInput(); // Continue à attendre l'entrée de l'utilisateur
          }
        }
      });
    }
  
    processUserInput(); // Démarre le traitement initial de l'entrée utilisateur
  }

function util(arg) {
  if (arg == "getCommandList") {
    return commands
  }
}

module.exports = {
  startTerminal,
};
