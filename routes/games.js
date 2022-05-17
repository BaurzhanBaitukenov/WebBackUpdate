const express = require("express");
const gameController = require("../controllers/gameController");
const router = express.Router();

router.get('/', gameController.getAllProducts);

module.exports = router;




