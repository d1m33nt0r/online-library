const { QueryTypes } = require('sequelize');

module.exports = function (app, db) {

    app.get("/genres", async (req, res) => {

        const genres = await db.sequelize.query("select * from genre",{ type: QueryTypes.SELECT });
        res.status(200).send(genres)
    })

    app.post("/genre", async (req, res) => {
        await db.sequelize.query(`insert into genre (name) 
            value ('${req.body.genrename}')`)

        const genres = await db.sequelize.query("select genre.name from genre",{ type: QueryTypes.SELECT });
        res.status(200).send(genres)
    })
}