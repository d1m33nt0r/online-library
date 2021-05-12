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
      unique: "idorder_status_UNIQUE"
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name",
      unique: "name_UNIQUE"
    }
  };
  const options = {
    tableName: "order_status",
    comment: "",
    indexes: [],
    timestamps: false
  };
  const OrderStatusModel = sequelize.define("order_status_model", attributes, options);
  return OrderStatusModel;
};