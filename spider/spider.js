// <!-- 小说抓取器 -->

// <!-- 网页端 -->
// <!-- 
//     getNoevlLink 获取小说的主页链接
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

let db = new Object()
// let
module.exports = {
    getNoevlLink: getNoevlLink,
    getNovelIndex: getNovelIndex,
    getNovelContent: getNovelContent,
    IsNovelUpdata: IsNovelUpdata,
    getBookNovel: getBookNovel,
    addBookNovel: addBookNovel,
    getBookNovelNid: getBookNovelNid
}


async function getNoevlLink(bookname, author) {

}
async function getNovelIndex(request, db, novelIndexSrc) {
    let $ = await request.getNovelIndex(novelIndexSrc)

    let novel = {
        name: $('#info h1').text().split(/\s+\/\s+/)[0],
        author: $('#info h1').text().split(/\s+\/\s+/)[1],
        avatar: $('#picbox .img_in img').attr('src'),
        info: $('#intro').text()
    }

    let isNovelExist = await db.isNovelExist(novel.name, novel.author)

    if (!isNovelExist) {
        novel.nid = await db.getBookNovelNid()
        await db.addBookNovel(nid, name, author, avatar, info)
        await db.addBookLinks(nid, novelIndexSrc)
    }
    if (isNovelExist && !await db.isLinksExist(isNovelExist, novelIndexSrc)) {
        await db.addBookLinks(isNovelExist, novelIndexSrc)
    }

    return novel
}
async function getNovelContent(novelContentSrc) {

}
async function IsNovelUpdata(nid) {

}
async function getBookNovel(nid, bookname, author) {

}
async function addBookNovel(nid, bookname, author, info, bookavatar) {

}
async function getBookNovelNid(nid = 100001) {
    return nid
}



