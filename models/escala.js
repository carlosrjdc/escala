"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Escala extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Escala.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      empresa: {
        type: DataTypes.STRING,
      },
      idRota: {
        type: DataTypes.STRING,
      },
      nTransporte: {
        type: DataTypes.STRING,
      },
      localOrgTransporte: {
        type: DataTypes.STRING,
      },
      textoAdicioal: {
        type: DataTypes.STRING,
      },
      placa: {
        type: DataTypes.STRING,
      },
      fornecimento: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      sequencia: {
        type: DataTypes.INTEGER,
      },
      codCliente: {
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
      peso: {
        type: DataTypes.FLOAT,
      },
      rua: {
        type: DataTypes.STRING,
      },
      perfil: {
        type: DataTypes.STRING,
      },
      dataSaidaMercadoria: {
        type: DataTypes.STRING,
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
      modelName: "Escala",
    }
  );
  return Escala;
};
