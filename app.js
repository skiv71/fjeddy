var { News } = require('./lib')

var news  = News.create(new Date().toISOString())

news.categories.add({ ref: 12345, text: `blurbbbbb` })
news.categories.add({ ref: 3142, text: `life of pi` })
news.categories()
news.categories.remove(3142)
news.categories()