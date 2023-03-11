const excelToJson = require("convert-excel-to-json");
const infoDados = require("./dados.json");
const db = require("../../models");
const moment = require("moment-timezone");

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
  agruparPor: (objetoArray, propriedade) => {
    const resultadoFinal = [];
    const escalaajustada = objetoArray.reduce(function (acc, obj) {
      let key = obj[propriedade];
      if (!acc[key]) {
        acc[key] = [];
        acc[key].push({
          data: String(moment(obj["dataSaidaMercadoria"]).format("DD-MM-YYYY")),
          nRota: obj["idRota"],
          placa: "",
          dt: String(obj["nTransporte"]),
          nfReentrega: funcoesAuxiliar.agruparNota(
            objetoArray,
            obj["idRota"],
            obj["fornecimento"]
          ),
          cliente: obj["cliente"],
          cidade: obj["cidade"],
          bairro: obj["bairro"],
          qtdEntrega: String(
            funcoesAuxiliar.contar(objetoArray, obj["idRota"])
          ),
          reentrega: String(
            funcoesAuxiliar.somarReentrega(objetoArray, obj["idRota"], "peso")
          ),
          ldb: String(
            funcoesAuxiliar.somar(objetoArray, obj["idRota"], "4000", "peso")
          ),
          itb: String(
            funcoesAuxiliar.somar(objetoArray, obj["idRota"], "3000", "peso")
          ),
          perfilRoterizado: String(obj["perfil"]),
        });
      }

      return acc;
    }, {});
    const novaEscala = Object.entries(escalaajustada);

    const arraynovoFinal = novaEscala.reduce((acc, item) => {
      acc.push(item[1][0]);
      return acc;
    }, []);

    return arraynovoFinal;
  },
};

const funcoesAuxiliar = {
  agruparNota: (array, dado, nf) => {
    let inicial = "";
    const infoAgrupada = array
      .filter((filtrar) => filtrar["idRota"] === dado)
      .map((item) => {
        const transString = String(item.fornecimento);
        inicial =
          transString.length < 10
            ? item.fornecimento + " / " + inicial
            : inicial;
      });

    return inicial;
  },

  somar: (array, item, tipo, campo) => {
    const valorSoma = array
      .filter(
        (filtrar) => filtrar.idRota === item && String(filtrar.empresa) === tipo
      )
      .reduce((acc, valor) => parseInt(acc) + parseInt(valor[campo]), 0);
    //console.log(valorSoma)
    return valorSoma;
  },

  somarReentrega: (array, item, campo) => {
    const valorSoma = array
      .filter(
        (filtrar) =>
          filtrar.idRota === item && String(filtrar.fornecimento).length < 10
      )
      .reduce((acc, valor) => parseInt(acc) + parseInt(valor[campo]), 0);
    //console.log(valorSoma)
    return valorSoma;
  },

  contar: (array, item) => {
    const valorSoma = array.filter((filtrar) => filtrar.idRota === item).length;
    return valorSoma;
  },
};

module.exports = funcoes;
