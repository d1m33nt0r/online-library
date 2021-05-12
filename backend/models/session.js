const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    token: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "token",
      unique: "token_UNIQUE"
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
    }
  };
  const options = {
    tableName: "session",
    comment: "",
    indexes: [{
      name: "fk_session_user1_idx",
      unique: false,
      type: "BTREE",
      fields: ["user_id"]
    }],
    timestamps: false
  };
  const SessionModel = sequelize.define("session_model", attributes, options);
  return SessionModel;
};