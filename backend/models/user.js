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
    firstname: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "firstname"
    },
    lastname: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "lastname"
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "password"
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email",
      unique: "email_UNIQUE"
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "phone",
      unique: "phone_UNIQUE"
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "group_id",
      references: {
        key: "id",
        model: "group_model"
      }
    }
  };
  const options = {
    tableName: "user",
    comment: "",
    indexes: [{
      name: "fk_user_group1_idx",
      unique: false,
      type: "BTREE",
      fields: ["group_id"]
    }],
    timestamps: false
  };
  const UserModel = sequelize.define("user_model", attributes, options);
  return UserModel;
};