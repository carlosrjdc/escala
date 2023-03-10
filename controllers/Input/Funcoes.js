const excelToJson = require("convert-excel-to-json");
const infoDados = require("./dados.json");

const funcoes = {
  converterArquivo: (arquivo) => {
    const result = excelToJson({
      source: arquivo,
      columnToKey: infoDados,
      sheets: "ZSD417",
    });

    return result.ZSD417;
  },
};

module.exports = funcoes;
