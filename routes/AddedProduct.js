const express = require("express");
const router = express.Router();
const ProductModel = require('../models/product')
router
    .route("/")
    .get(async (req, res) => {
        const product = await ProductModel.find();
        res.render('AddedProduct.ejs', {p: product})
    })
module.exports = router;