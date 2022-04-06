

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
    let $ = await request.getNovelPage(novelIndexSrc)

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



