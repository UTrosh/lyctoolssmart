const app = require('./app/app')
const AutoGitUpdate = require('auto-git-update');
const colors = require('colors')
const license = require('./app/module/loader/license')
const config = require('./config/config')
const configupdate = {
    repository: 'https://github.com/utrosh/lyctoolssmart',
    fromReleases: true,
    tempLocation: 'C:/Users/Public/tmp/',
    ignoreFiles: ['config/config.js'],
    executeOnComplete: 'lyc.exe',
    exitOnComplete: true,
    logConfig: {
        logGeneral:  false,
        logWarning:  false,
        logError:  false,
        writeLog:  false,
    }
}

const updater = new AutoGitUpdate(configupdate);

start()
async function start() {
    let isupdate = await updater.compareVersions()
    let licenses = await license.sendPostRequest(config.licensekey)
    
    if (!isupdate.upToDate) {
        console.log("[UPDATE] ".gray + "Une nouvelle mise à jour est disponible")
        console.log("[UPDATE] ".gray + "Mise à jour...".bgYellow)
        await updater.autoUpdate()
        console.log("[UPDATE] ".gray + "Mise à jour terminé, redémarrage...".bgGreen)
    } else {
        if (licenses.status == 'success') {
            console.log("[LICENSE] ".gray + "License validé !".green)
            app.startTerminal()
        } else {
            console.log("[LICENSE] ".gray + "Vous n'êtes pas autorisé à utiliser cette application".bgRed)
            setTimeout(() => {
                process.exit()
            }, 1000)
        }
        
    }
}
//app.startTerminal()