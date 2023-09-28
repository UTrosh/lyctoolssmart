const app = require('./app/app')
const AutoGitUpdate = require('auto-git-update');

const config = {
    repository: 'https://github.com/chegele/BackupPurger',
    fromReleases: true,
    tempLocation: 'C:/Users/scheg/Desktop/tmp/',
    ignoreFiles: ['util/config.js'],
    executeOnComplete: 'C:/Users/scheg/Desktop/worksapce/AutoGitUpdate/startTest.bat',
    exitOnComplete: true,
    logConfig: {
        logGeneral:  false,
        logWarning:  false,
        logError:  false,
        writeLog:  false,
    }
}

const updater = new AutoGitUpdate(config);

start()
async function start() {
    console.log(await updater.compareVersions());
}
//app.startTerminal()