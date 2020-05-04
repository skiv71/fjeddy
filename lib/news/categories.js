class Categories {

    static list() {
        console.log('categ list...')
        console.log(this.data.articles)
    }

    static add(article) {
        if (typeof article != `object` || !article.hasOwnProperty(`ref`))
            throw new Error(`Invalid arguments, article object with ref property required!`)
        console.log(this.data.articles.push(article))
    }

    static remove(ref) {
        console.log(`Remove article, ref: ${ref}!`)
        console.log('categ remove?')
        var i = this.data.articles
            .findIndex(a => a.ref == ref)
        if (i < 0)
            throw new Error(`Unable to find your article, ref: ${ref}!`)
        return this.data.articles.splice(i, 1)
    }

}

exports = module.exports = Categories.list

exports.add = Categories.add
exports.remove = Categories.remove