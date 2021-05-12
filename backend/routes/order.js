const { QueryTypes } = require('sequelize');

module.exports = function (app, db) {

    app.get("/my-orders", async (req, res) => {

        const orders = await db.sequelize.query("select o.date, b.title, concat(a.first_name, ' ', a.last_name) as author, os.name as status \n" +
            "from `order` as o, order_status as os, book as b, `user` as u, author as a, book_instance as bi\n" +
            "where o.user_id = u.id and a.id = b.author_id and bi.book_id = b.id and o.book_instance_code_isbn = bi.code_isbn\n" +
            "and os.id = o.order_status_id and o.user_id = " + req.headers.user_id, { type: QueryTypes.SELECT });

        res.status(200).send(orders)
    })
}