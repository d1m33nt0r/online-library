const { QueryTypes } = require('sequelize');

module.exports = function (app, db) {

    app.get("/catalog", async (req, res) => {

        const books = await db.sequelize.query("select b.id, b.title, concat(a.first_name, ' ' ,a.last_name) as author, b.price \n" +
            "from book as b, author as a\n" +
            "where a.id = b.author_id \n",{ type: QueryTypes.SELECT });

        res.status(200).send(books)
    })

    app.get("/book", async (req, res) => {

        const book = await db.sequelize.query("select b.id, b.title, b.description, b.count_pages, b.price, b.year, \n" +
            "g.name, concat(a.first_name, ' ', a.last_name) as author, ph.name\n" +
            "from book as b, author as a, publishing_house as ph, genre as g\n" +
            "where g.id = b.genre_id and ph.id = b.publishing_house_id and a.id = b.author_id and b.id = " + req.headers.book_id,{ type: QueryTypes.SELECT });

        res.status(200).send(book[0])
    })
}