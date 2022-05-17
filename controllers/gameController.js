const ProductModel = require('../models/product');

exports.postProduct = async (req, res, next) => {
    const prod = new ProductModel({
        title: req.body.title,
        imageURL: req.body.imageURL,
        price: req.body.price,
        description: req.body.description
    });
    await prod.save()
        .then(result => {
            console.log(req.body)
            res.redirect('/');
        }).catch(err => console.log(err));
}

/*
exports.deleteProduct = (req, res, next) => {
    // Product.deleteOne({ _id: req.body.id }) //deleteOne mongodb
    // Product.findByIdAndDelete(req.body.id) //findOneAndDelete
    Product.findByIdAndRemove(req.body.id) //findAndModify
        .then(result => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
}*/

exports.getAllProducts = (req, res, next) => {
    const products = ProductModel.findAll();
    res.render('AddedProduct', {path: '/', prods: products });
};


/*
exports.addToCart = (req, res, next) => {
    const addedProduct = Product.findById(req.body.id)[0];
    Cart.save(addedProduct);
    res.redirect('/cart');
}

exports.getCart = (req, res, next) => {
    res.render('cart', { cart: Cart.getCart(), pageTitle: 'Shopping Cart Detail', path: '/cart', name: 'Edward' })
}

exports.deleteInCart = (req, res, next) => {
    Cart.delete(req.body.prodId);
    res.redirect('/cart');
}*/
