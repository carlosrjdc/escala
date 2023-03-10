const converter = require("./Funcoes.js");
const db = require("../../models");
const escala = db.Escala;

class inputController {
  static testeConversao = async (req, res) => {
    const arquivoConvertido = await converter.converterArquivo(req.file.buffer);
    console.log(arquivoConvertido.shift());
    const inputDados = await escala.bulkCreate(arquivoConvertido);
    try {
      res.status(200).json(arquivoConvertido);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };
  static quantidade = async (req, res) => {
    const verquantidade = await escala.count();
    try {
      res.status(200).json(verquantidade);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };
}

module.exports = inputController;
