module.exports = {
    isNovelExist: async function (name, author) {
        return true
    },
    isLinksExist: async function (nid, src) {
        return false
    },
    addBookLinks: async function (nid, src) {
        return false
    },
    addBookNovel: async function (nid, name, author, avatar, info) {
        return false
    }
}