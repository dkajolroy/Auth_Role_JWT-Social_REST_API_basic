const slugify = require("slugify")
const BrandModel = require("../Models/BrandModel")

exports.createBrand = async (req, res) => {
    const { name } = req.body
    const slug = slugify(name.toLowerCase())
    try {
        const findBrand = await BrandModel.findOne({ slug })
        if (findBrand) return res.status(400).send({ message: "Brand already exist" })

        const createBrand = await BrandModel.create({ name, slug })
        res.status(201).send({ createBrand, message: "Brand added successfully" })
    } catch (error) {
        res.status(500).send({ message: "Server internal error" })
    }
}