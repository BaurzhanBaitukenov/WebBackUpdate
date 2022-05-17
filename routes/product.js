const express = require("express");
const router = express.Router();
const controller = require('../controllers/gameController')
router
    .route("/")
    .get((req, res) => res.render('product.ejs'))
    .post(controller.postProduct)
module.exports = router;