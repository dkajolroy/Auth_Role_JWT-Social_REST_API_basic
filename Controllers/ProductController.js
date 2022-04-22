const ProductModel = require("../Models/ProductModel")

exports.createProduct = async (req, res) => {
    const { title, countInStock, regularPrice, creator, category, brand } = req.body
    if (!title || !countInStock || !regularPrice) return res.status(400).send({ message: "Invalid Request" })
    try {
        const create = await ProductModel.create({
            title, countInStock, regularPrice, creator, category, brand
        })
        if (create) return res.status(201).send({ create, message: "Product added successfully" })

        res.status(400).send({ message: "Enter valid information" })
    } catch (error) {
        res.status(500).send({ message: "Server internal error" })
    }
}

exports.allProduct = async (req, res) => {
    const product = await ProductModel.find()
    res.send(product)
}

exports.brandProduct = async (req, res) => {
    const findPro = await ProductModel.find()
    const brandPro = findPro.filter(x => x.brand == req.params._id)
    res.send(brandPro)
}