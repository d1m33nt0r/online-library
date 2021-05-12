const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_id",
      references: {
        key: "id",
        model: "user_model"
      }
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "book_id",
      references: {
        key: "id",
        model: "book_model"
      }
    }
  };
  const options = {
    tableName: "cart",
    comment: "",
    indexes: [{
      name: "fk_Cart_user1_idx",
      unique: false,
      type: "BTREE",
      fields: ["user_id"]
    }, {
      name: "fk_Cart_book1_idx",
      unique: false,
      type: "BTREE",
      fields: ["book_id"]
    }],
    timestamps: false
  };
  const CartModel = sequelize.define("cart_model", attributes, options);
  return CartModel;
};