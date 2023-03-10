const converter = require("./Funcoes.js");
const db = require("../../models");
const escala = db.Escala;

class inputController {
  static testeConversao = async (req, res) => {
    const arquivoConvertido = await converter.converterArquivo(req.file.buffer);
    try {
      res.status(200).json(arquivoConvertido);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };
}

module.exports = inputController;
