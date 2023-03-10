"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Produtividade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Produtividade.belongsTo(models.Escala, {
        as: "rota",
        foreignKey: "rotaId",
      });
      Produtividade.belongsTo(models.User, {
        as: "separador",
        foreignKey: "separadorId",
      });
      Produtividade.belongsTo(models.User, {
        as: "conferente",
        foreignKey: "conferenteId",
      });
    }
  }
  Produtividade.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      rotaId: {
        type: DataTypes.INTEGER,
        references: { model: "Escalas", key: "id" },
      },
      separadorId: {
        type: DataTypes.INTEGER,
        references: { model: "Users", key: "id" },
      },
      inicioSeparacao: {
        type: DataTypes.DATE,
      },
      terminoSeparacao: {
        type: DataTypes.DATE,
      },
      conferenteId: {
        type: DataTypes.INTEGER,
        references: { model: "Users", key: "id" },
      },
      inicioConferencia: {
        type: DataTypes.DATE,
      },
      terminoConferencia: {
        type: DataTypes.DATE,
      },
      inicioCarregamento: {
        type: DataTypes.DATE,
      },
      terminoCarregamento: {
        type: DataTypes.DATE,
      },
      lacre: {
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
      modelName: "Produtividade",
    }
  );
  return Produtividade;
};
