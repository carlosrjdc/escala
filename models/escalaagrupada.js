"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EscalaAgrupada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EscalaAgrupada.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nRota: {
        type: DataTypes.STRING,
      },
      placa: {
        type: DataTypes.STRING,
      },
      dt: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      nfReentrega: {
        type: DataTypes.STRING,
      },
      cliente: {
        type: DataTypes.STRING,
      },
      cidade: {
        type: DataTypes.STRING,
      },
      bairro: {
        type: DataTypes.STRING,
      },
      qtdEntrega: {
        type: DataTypes.INTEGER,
      },
      reentrega: {
        type: DataTypes.INTEGER,
      },
      ldb: {
        type: DataTypes.INTEGER,
      },
      itb: {
        type: DataTypes.INTEGER,
      },
      perfilRoterizado: {
        type: DataTypes.STRING,
      },
      perfilEfetivo: {
        type: DataTypes.STRING,
      },
      capacidade: {
        type: DataTypes.INTEGER,
      },
      ocupacao: {
        type: DataTypes.INTEGER,
      },
      onda: {
        type: DataTypes.STRING,
      },
      prioridade: {
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
      modelName: "EscalaAgrupada",
    }
  );
  return EscalaAgrupada;
};
