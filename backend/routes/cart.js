const { QueryTypes } = require('sequelize');

module.exports = function (app, db) {

    app.get("/my-cart", async (req, res) => {

        const books = await db.sequelize.query("select b.title, concat(a.first_name, ' ' ,a.last_name) as author, b.price, c.book_id, c.user_id\n" +
            "from book as b, author as a, cart as c, user as u\n" +
            "where a.id = b.author_id  and u.id = c.user_id and c.book_id = b.id and u.id = " + req.headers.user_id,{ type: QueryTypes.SELECT });

        res.status(200).send(books)
    })

    app.delete("/my-cart", async (req, res) => {
        console.log(req.headers.user_id, req.headers.book_id)
        await db.sequelize.query(`delete from cart where cart.user_id = `
            + req.headers.user_id + ` and cart.book_id = `
            + req.headers.book_id,{ type: QueryTypes.DELETE });

        res.status(200).send()
    })

    app.post("/add-to-cart", async (req, res) => {
        console.log("body " + req.body.user_id)
        db.sequelize.query(`insert into cart (user_id, book_id) 
            values (${req.body.user_id}, ${req.body.book_id})`)
            .then(ress =>{
                res.status(200).send()
            })
            .catch(err => {
                console.log(err.message)
            })


    })
}