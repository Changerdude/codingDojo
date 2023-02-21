const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json({ products: allProducts});
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err});
        });
}

module.exports.findOneProduct = (req,res) => {
    Product.findOne({ _id: req.params.id })
        .then((oneProduct) => {
            res.json({ product: oneProduct});
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err});
        });
}

module.exports.random = (req,res) => {
    Product.find({})
        .then((allProducts) => {
            return res.json(allProducts[Math.floor(Math.random() * allProducts.length)])
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err })
        })
}
module.exports.createProduct = (req,res) => {
    Product.create(req.body)
        .then((newProduct) => {
            res.json({ product: newProduct });
        })
        .catch((err) => {
            res.status(400).json({ message: "Something went wrong", error: err });
        });
}
module.exports.updateExistingProduct = (req,res) => {
    Product.findOneAndUpdate({_id: req.params.id }, req.body, {new: true, runValidators: true})
        .then((updatedProduct) => {
            res.json({ product: updatedProduct });
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error:err});
        });
}

module.exports.deleteExistingProduct = (req,res) => {
    Product.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result: result });
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err });
        });
}