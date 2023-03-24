const fetch = require('node-fetch')

exports.getGroupAdmins = function(participants){ let admins = []; for (let i of participants) { i.admin !== null ? admins.push(i.id) : '' } return admins }
exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => { fetch(url, options).then(response => response.json()).then(json => { resolve(json)}).catch((err) => { reject(err)})})