const express = require("express");
const cors = require("cors");
const escala = require("./escala.js");

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ Titulo: "Carlos Roberto" });
  });

  app.use(
    express.json(),
    cors(),
    escala,
    express.raw({ type: "application/pdf" })
  );
};

module.exports = routes;
