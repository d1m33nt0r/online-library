const {Sequelize} = require('sequelize')
const env = require("../config/env")

const sequelize = new Sequelize(process.env.NODE_ENV === "test" ? env.testDatabase : env.database, env.user, env.password, {
    dialect: env.dialect,
    port: env.port,
    host: env.host,
    logging: env.getEnv().logging
})

const User = require('../models/user')(sequelize)
const Session = require('../models/session')(sequelize)
const Genre = require('../models/genre')(sequelize)
const PublishingHouse = require('../models/publishing_house')(sequelize)
const Author = require('../models/author')(sequelize)
const Book = require('../models/book')(sequelize)
const BookInstance = require('../models/book_instance')(sequelize)
const OrderStatus = require('../models/order_status')(sequelize)
const Order = require('../models/order')(sequelize)
const Group = require('../models/group')(sequelize)
const Cart = require('../models/cart')(sequelize)

PublishingHouse.hasMany(Book, {
    foreignKey: {
        name: 'publishing_house_id',
        allowNull: false
    }
})
Book.belongsTo(PublishingHouse, {
    foreignKey: {
        name: 'publishing_house_id',
        allowNull: false
    }
})

Author.hasMany(Book, {
    foreignKey: {
        name: 'author_id',
        allowNull: false
    }
})
Book.belongsTo(Author, {
    foreignKey: {
        name: 'author_id',
        allowNull: false
    }
})

Book.hasMany(BookInstance, {
    foreignKey: {
        name: 'book_id',
        allowNull: false
    }
})
BookInstance.belongsTo(Book, {
    foreignKey: {
        name: 'book_id',
        allowNull: false
    }
})

Genre.hasMany(Book, {
    foreignKey: {
        name: 'genre_id',
        allowNull: false
    }
})
Book.belongsTo(Genre, {
    foreignKey: {
        name: 'genre_id',
        allowNull: false
    }
})

Order.belongsTo(BookInstance, {
    foreignKey: {
        name: 'book_instance_code_isbn',
        allowNull: false
    }
})


User.hasMany(Order, {
    foreignKey: {
        name: 'user_id',
        allowNull: false
    }
})
Order.belongsTo(User, {
    foreignKey: {
        name: 'user_id',
        allowNull: false
    }
})

Order.hasMany(OrderStatus, {
    foreignKey: {
        name: 'order_status_id',
        allowNull: false
    }
})
OrderStatus.belongsTo(Order, {
    foreignKey: {
        name: 'order_status_id',
        allowNull: false
    }
})

Group.hasMany(User, {
    foreignKey: {
        name: 'group_id',
        allowNull: false
    }
})
User.belongsTo(Group, {
    foreignKey: {
        name: 'group_id',
        allowNull: false
    }
})

User.hasMany(Session, {
    foreignKey: {
        name: 'user_id',
        allowNull: false
    }
})
Session.belongsTo(User, {
    foreignKey: {
        name: 'user_id',
        allowNull: false
    }
})

async function syncModel ()
{
    await sequelize.sync({ force: false })
}

module.exports = {
    sequelize: sequelize,
    user: User,
    session: Session,
    genre: Genre,
    publishingHouse: PublishingHouse,
    author: Author,
    book: Book,
    bookInstance: BookInstance,
    orderStatus: OrderStatus,
    order: Order,
    group: Group,
    cart: Cart,
    sync: syncModel
}