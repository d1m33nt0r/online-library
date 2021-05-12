const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    code_isbn: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "code_isbn",
      unique: "code_isbn_UNIQUE"
    },
    in_stoke: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "in_stoke"
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
    tableName: "book_instance",
    comment: "",
    indexes: [{
      name: "fk_book_instance_book1_idx",
      unique: false,
      type: "BTREE",
      fields: ["book_id"]
    }],
    timestamps: false
  };
  const BookInstanceModel = sequelize.define("book_instance_model", attributes, options);
  return BookInstanceModel;
};