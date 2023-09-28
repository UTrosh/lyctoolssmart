const app = require('./app/app')
const AutoGitUpdate = require('auto-git-update');

const config = {
    repository: 'https://github.com/utrosh/lyctoolssmart',
    fromReleases: true,
    tempLocation: 'C:/Users/Public/tmp/',
    ignoreFiles: ['config/config.yml'],
    executeOnComplete: 'lyc.exe',
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