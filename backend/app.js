const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const db = require("./modules/db")
const app = express()
const httpPort = 3000

db.sync()
    .then(() => {
        if(process.env.NODE_ENV !== 'test')
            console.log("successfully synchronized model")
    })
    .catch(err => {
        console.error(err.message)
    })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

require("./routes/user")(app, db)
require("./routes/order")(app, db)
require("./routes/book")(app, db)
require("./routes/cart")(app, db)
require("./routes/comment")(app, db)
require("./routes/genre")(app, db)
require("./routes/author")(app, db)
require("./routes/publisher")(app, db)

app.listen(httpPort, () => {
    console.log('server listen port', httpPort)
})
