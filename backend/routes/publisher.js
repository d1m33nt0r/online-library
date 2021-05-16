const { QueryTypes } = require('sequelize');

module.exports = function (app, db) {

    app.get("/publishers", async (req, res) => {

        const publishers = await db.sequelize.query("select * from publishing_house",{ type: QueryTypes.SELECT });

        res.status(200).send(publishers)
    })

    app.post("/publisher", async (req, res) => {

        await db.sequelize.query(`insert into publishing_house (name) 
            value ('${req.body.name}')`)

        const publishers = await db.sequelize.query("select * from publishing_house",{ type: QueryTypes.SELECT });

        res.status(200).send(publishers)
    })
}