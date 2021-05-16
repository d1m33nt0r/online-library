const { QueryTypes } = require('sequelize');

module.exports = function (app, db) {

    app.get("/comments", async (req, res) => {

        const comments = await db.sequelize.query("select c.text, c.datetime, concat(u.firstname, \" \", u.lastname) as author\n" +
            "from book as b, comment as c, user as u\n" +
            "where b.id = c.book_id and u.id = c.user_id and c.book_id = " + req.headers.book_id,{ type: QueryTypes.SELECT });

        res.status(200).send(comments)
    })

    app.post("/add-comment", async (req, res) => {

        await db.sequelize.query(`insert into comment (text, datetime, user_id, book_id) 
            values ('${req.body.text}', '${req.body.datetime}', ${req.body.user_id}, ${req.body.book_id})`)

        const comments = await db.sequelize.query("select c.text, c.datetime, concat(u.firstname, \" \", u.lastname) as author\n" +
            "from book as b, comment as c, user as u\n" +
            "where b.id = c.book_id and u.id = c.user_id and c.book_id = " + req.body.book_id,{ type: QueryTypes.SELECT });

        res.status(200).send(comments)
    })
}