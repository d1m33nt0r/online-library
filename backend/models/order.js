const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id",
      unique: "id_UNIQUE"
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date"
    },
    order_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "order_status_id",
      references: {
        key: "id",
        model: "order_status_model"
      }
    },
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
    book_instance_code_isbn: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "book_instance_code_isbn",
      references: {
        key: "code_isbn",
        model: "book_instance_model"
      }
    }
  };
  const options = {
    tableName: "order",
    comment: "",
    indexes: [{
      name: "fk_order_order_status1_idx",
      unique: false,
      type: "BTREE",
      fields: ["order_status_id"]
    }, {
      name: "fk_order_user1_idx",
      unique: false,
      type: "BTREE",
      fields: ["user_id"]
    }, {
      name: "fk_order_book_instance1_idx",
      unique: false,
      type: "BTREE",
      fields: ["book_instance_code_isbn"]
    }],
    timestamps: false
  };
  const OrderModel = sequelize.define("order_model", attributes, options);
  return OrderModel;
};