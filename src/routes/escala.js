const express = require("express");
const inputController = require("../../controllers/Input/inputController.js");
const fs = require("fs");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

router.post(
  "/upload",
  upload.single("arquivo"),
  inputController.testeConversao
);
router.get("/quantidade", inputController.quantidade);

module.exports = router;
