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
  static quantidade = async (req, res) => {
    const verquantidade = await escala.count({
      where: {
        fornecimento: req.params.id,
      },
    });
    try {
      res.status(200).json(verquantidade);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };

  static cadastro = async (req, res) => {
    const cadastrarinfo = await escala.create(req.body);
    try {
      res.status(200).json(cadastrarinfo);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };
}

module.exports = inputController;
