const getmacs = require('getmac');
const axios = require('axios')

function sendPostRequest(licenses) {
  return new Promise(async(resolve, reject) => {
    const server = 'http://panel.troshhost.fr:10119/api/v1';
    const hwid = getmacs.default()// Définissez votre propre fonction pour obtenir le HWID
  
    const requestData = {
      hwid: hwid,
      license: licenses,
      plugin: 'LycToolsSmart', // Remplacez par la valeur souhaitée
      version: 'smart', // Remplacez par la valeur souhaitée
    };
  
    try {

      const url = new URL(server);
      const headers = {
        'User-Agent': 'uLicense',
        'Authorization': '7a2c4d753748191fa6f604bf200d15ae9eabf7fa', // Remplacez par la valeur souhaitée
        'Content-Type': 'application/json; charset=UTF-8',
      };
  
      const response = await axios.post(url.href, requestData, {
        headers: headers,
      });
  
      resolve(response.data)
    } catch (error) {
      reject(error)
    }
  })
  
  }

  
module.exports = {
  sendPostRequest
}
  


