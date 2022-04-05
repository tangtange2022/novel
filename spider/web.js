const superagent = require('superagent')
const charset = require('superagent-charset')
const request = charset(superagent)
const { userAgents } = require('./userAgents')
const cheerio = require('cheerio')

module.exports = {
    getNovelIndex: async function (src) {
        return requestAsync(src).catch(console.log)
    }
}
function requestAsync(src) {
    return new Promise(function (s, j) {
        request.get(src).buffer(true).charset().set({ 'User-Agent': userAgents[2] }).end((err, res) => {
            err ? j(err) : s(cheerio.load(res.text))
        })
    })
}