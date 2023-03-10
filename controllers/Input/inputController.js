const converter = require("./Funcoes.js");
const db = require("../../models");
const escala = db.Escala;

class inputController {
  static testeConversao = async (req, res) => {
    const arrDadosInput = [];
    const arquivoConvertido = await converter.converterArquivo(req.file.buffer);

    //const inputInfoEscala = await escala.bulkCreate(arquivoConvertido);
    await arquivoConvertido.map(async (item) => {
      const verificar = await escala.count({
        where: {
          fornecimento: item.fornecimento,
        },
      });

      if ((verificar < 1) & (item.empresa !== "Empresa")) {
        item.dataSaidaMercadoria = String(item.dataSaidaMercadoria);
        arrDadosInput.push(item);
      }
    });

    const inputInfoEscala = await escala.bulkCreate(arrDadosInput);

    try {
      res.status(200).json(arquivoConvertido);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };
}

module.exports = inputController;
