//@ts-check
var Categories = require('./categories')

class News {

    constructor(date) {
        this.data = { date, articles: [] }
        this.categories = Categories.bind(this)
        this.categories.add = Categories.add.bind(this)
        this.categories.remove = Categories.remove.bind(this)
    }

    static create(date) {
        return new News(date)
    }

}

exports.create = News.create