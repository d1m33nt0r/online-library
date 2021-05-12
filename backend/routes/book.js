const { QueryTypes } = require('sequelize');

module.exports = function (app, db) {

    app.get("/catalog", async (req, res) => {

        const books = await db.sequelize.query("select b.id, b.title, concat(a.first_name, ' ' ,a.last_name) as author, b.price \n" +
            "from book as b, author as a\n" +
            "where a.id = b.author_id \n",{ type: QueryTypes.SELECT });

        res.status(200).send(books)
    })
}