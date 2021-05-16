const { QueryTypes } = require('sequelize');

module.exports = function (app, db) {

    app.get("/authors", async (req, res) => {

        const authors = await db.sequelize.query("select a.id, a.first_name as firstname, a.last_name as lastname\n" +
            "from author as a\n",{ type: QueryTypes.SELECT });

        res.status(200).send(authors)
    })

    app.post("/author", async (req, res) => {

        await db.sequelize.query(`insert into author (first_name, last_name) 
            values ('${req.body.firstname}', '${req.body.lastname}')`)

        const authors = await db.sequelize.query("select a.first_name as firstname, a.last_name as lastname\n" +
            "from author as a\n",{ type: QueryTypes.SELECT });

        res.status(200).send(authors)
    })
}