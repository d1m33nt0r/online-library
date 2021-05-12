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
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "title"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description"
    },
    count_pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "count_pages"
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "year"
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "price"
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "genre_id",
      references: {
        key: "id",
        model: "genre_model"
      }
    },
    publishing_house_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "publishing_house_id",
      references: {
        key: "id",
        model: "publishing_house_model"
      }
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "author_id",
      references: {
        key: "id",
        model: "author_model"
      }
    }
  };
  const options = {
    tableName: "book",
    comment: "",
    indexes: [{
      name: "fk_book_genre1_idx",
      unique: false,
      type: "BTREE",
      fields: ["genre_id"]
    }, {
      name: "fk_book_publishing_house1_idx",
      unique: false,
      type: "BTREE",
      fields: ["publishing_house_id"]
    }, {
      name: "fk_book_author1_idx",
      unique: false,
      type: "BTREE",
      fields: ["author_id"]
    }],
    timestamps: false
  };
  const BookModel = sequelize.define("book_model", attributes, options);
  return BookModel;
};