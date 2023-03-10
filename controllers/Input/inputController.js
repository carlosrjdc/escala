const converter = require("./Funcoes.js");
const db = require("../../models");
const escala = db.Escala;

class inputController {
  static testeConversao = async (req, res) => {
    const arquivoConvertido = await converter.converterArquivo(req.file.buffer);
    const arquivoFiltrado = await converter.verificarDuplicados(
      arquivoConvertido
    );

    const inputInfoEscala = await escala.bulkCreate(arquivoFiltrado);

    try {
      res.status(200).json(arquivoFiltrado);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };
}

module.exports = inputController;
