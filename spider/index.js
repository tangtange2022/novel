const spider = require('./spider')
const web = require('./web')
const db= require('./db')
// console.log(spider.getNovelIndex(web,"https://www.bbiquge.net/book_107755/"))

ad()
async function ad(){
    console.log(await spider.getNovelIndex(web,db,"https://www.bbiquge.net/book_107755/"))
}

