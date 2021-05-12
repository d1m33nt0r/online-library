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
    tableName: "genre",
    comment: "",
    indexes: [],
    timestamps: false
  };
  const GenreModel = sequelize.define("genre_model", attributes, options);
  return GenreModel;
};