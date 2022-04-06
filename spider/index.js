const db = require('./db')
const request = require('./request')
const async = require('async')

request.getNovelContent('https://www.bbiquge.net/book_12615/6046086.html').then(console.log).catch(console.log)

// module.exports = {
//     getnovelhome
// }


// <!-- 小说抓取器 -->

// <!-- 网页端 -->
// <!-- 
//     getNoevlLink c
//     getNovelIndex  通过小说主页链接获取小说信息
//     getNovelContent  通过小说主页的信息获取小说章节内容
//     IsNovelUpdata 判断小说是否有更新
//  -->

// <!-- node端 -->
// <!-- 
//     小说表
//         getBookNovel 匹配获取小说信息
//         addBookNovel 添加小说信息
//         getBookNovelNid 注册Nid 主键
//     章节表

//     链接表

//  -->

// <!-- 数据库端 -->
// <!-- 

//  -->