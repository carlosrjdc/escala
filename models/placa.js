"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Placa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Placas.hasMany(models.EscalaAgrupada, {
        foreignKey: "placaId",
      });
      Placas.hasMany(models.Disponibilidade, {
        foreignKey: "placaId",
      });
    }
  }
  Placas.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      placa: {
        type: DataTypes.STRING,
      },
      transportadora: {
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
      modelName: "Placa",
    }
  );
  return Placa;
};
