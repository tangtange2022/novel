const superagent = require('superagent')
const charset = require('superagent-charset')
const request = charset(superagent)
const cheerio = require('cheerio')
const { userAgents } = require('./userAgents')
const async = require('async')
const urlencode = require('urlencode')

// let page = new pages()


module.exports = {
    // 批量获取 小说链接
    getNovelLink: async function (src) {
        // 'https://www.bbiquge.net/top/allvote/1.html'
        let ret = []
        let res = await requestAsync(src).catch(console.log)
        let $ = cheerio.load(res.text)

        $('#articlelist ul:nth-child(2n-1) li').each((index, element) => {
            ret.push($(element).find('span.l2 a').attr('href'))
        })

        return ret
    },

    // 获取小说主页面
    getNovelHome: async function (src) {
        let res = await requestAsync(src).catch(console.log)
        let $ = cheerio.load(res.text)

        return {
            title: $('#info h1').text().split(' / ')[0],
            author: $('#info h1').text().split(' / ')[1],
            src:$('#picbox img').attr('src'),
            info:$('#intro').text(),
        }
    },
    // 获取小说章节列表
    getNovelChapterLinks: async function (src) { 
        let res = await requestAsync(src).catch(console.log)
        let $ = cheerio.load(res.text)
        let ret = []

        $(".zjlist dd a").each((index, element) => {
            ret.push(src + $(element).attr("href"))
        })

        return ret
    },
    // 获取小说单个章节内容
    getNovelContent: async function (src) {
        let res = await requestAsync(src).catch(console.log)
        let $ = cheerio.load(res.text)

        return {
            title: title,
            content: content
        }
    }
}

function requestAsync(src) {
    return new Promise(function (res, rej) {
        request.get(src).buffer(true).charset()
            .set({ "User-Agents": userAgents[2] })
            .end((err, result) => {
                err ? rej(err) : res(result)

            })
    })
}