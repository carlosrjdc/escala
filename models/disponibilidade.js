"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Disponibilidade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Disponibilidade.belongsTo(models.Placa, {
        as: "placa",
        foreignKey: "placaId",
      });
      // define association here
    }
  }
  Disponibilidade.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      data: {
        type: DataTypes.STRING,
      },
      placaId: {
        type: DataTypes.INTEGER,
        references: { model: "Placas", key: "id" },
      },
      status: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Disponibilidade",
    }
  );
  return Disponibilidade;
};
