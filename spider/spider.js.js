const superagent = require('superagent')
const charset = require('superagent-charset')
const request = charset(superagent)
const { userAgents } = require('./userAgents')
const cheerio = require('cheerio')

const page = {
    // 搜索关键词相关小说页
    getNovelSearch:async function(name,author){

    },
    // 获取小说主页面
    getNovelHome : async function(src){

    },
    // 获取小说单个章节内容
    getNovelContent:async function(src){

    }
}
const spider = {
    
}
const db = {}
