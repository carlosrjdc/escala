const excelToJson = require("convert-excel-to-json");
const infoDados = require("./dados.json");
const db = require("../../models");

const escala = db.Escala;

const funcoes = {
  converterArquivo: (arquivo) => {
    const result = excelToJson({
      source: arquivo,
      columnToKey: infoDados,
      sheets: "ZSD417",
    });

    return result.ZSD417;
  },
  verificarDuplicados: async (arquivoConvertido) => {
    const arrDadosInput = [];
    await arquivoConvertido.map(async (item) => {
      const verificar = await escala.count({
        where: {
          fornecimento: item.fornecimento,
        },
      });

      if (verificar < 1) {
        item.dataSaidaMercadoria = String(item.dataSaidaMercadoria);
        arrDadosInput.push(item);
      }
    });
    return arrDadosInput;
  },
};

module.exports = funcoes;
