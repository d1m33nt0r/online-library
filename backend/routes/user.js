const TokenGenerator = require('uuid-token-generator')
const tokgen = new TokenGenerator(256, TokenGenerator.BASE62)

module.exports = function (app, db) {

    app.post("/register", (req, res) => {
        db.user.create({
            email: req.body.email,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phone: req.body.phone,
            group_id: 1
        })
            .then(user => {
                res.status(200).send(user)
            })
            .catch(err => {
                console.log(err.message)
                res.status(400).send()
            })
    })

    app.post("/login", (req, res) => {
        db.user.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })
            .then(user => {
                if(user)
                {
                    db.session.create({
                        token: tokgen.generate(),
                        user_id: user.id
                    })
                        .then(session => {
                            res.status(200).send({token: session.token})
                        })
                        .catch(err => {
                            console.error(err.message)
                            res.status(500).send()
                        })
                }
                else
                {
                    res.status(422).send([{
                        field: "email or password",
                        message: "wrong email or password"
                    }])
                }

            })
            .catch(err => {
                if(req.body.password === undefined || req.body.email === undefined)
                {
                    res.status(422).send([{
                        field: "email and password",
                        message: "required"
                    }])
                }
                else{
                    console.log(err.message)
                    res.status(500).send()
                }
            })
    })

    app.delete("/logout", (req, res) => {
        db.session.destroy({
            where:{
                token: req.headers.token
            }
        })
        res.status(200).send()
    })

    app.get("/identification", (req, res) => {

        db.session.findOne({
            where: {
                token: req.headers.token
            },
            include: {
                model: db.user
            }
        })
            .then(result => {
                if(result)
                    res.status(200)
                        .send(result.dataValues.user_model.dataValues)
                else
                    res.status(401).send()
            })
            .catch(err => {
                if(req.headers.token === undefined)
                {
                    res.status(422).send([{
                        field: "token",
                        message: "required"
                    }])
                }
                else{
                    console.log(err.message)
                    res.status(500).send()
                }
            })
    })
}