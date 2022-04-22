const slugify = require("slugify")
const CategoryModel = require("../Models/CategoryModel")

exports.createCategory = async (req, res) => {
    const { name } = req.body
    const slug = slugify(name.toLowerCase())
    try {
        const findCategory = await CategoryModel.findOne({ slug })
        if (findCategory) return res.status(400).send({ message: "Category already exist" })

        const createCategory = await CategoryModel.create({ name, slug })
        res.status(201).send({ createCategory, message: "Created successfully" })
    } catch (error) {
        res.status(500).send({ message: "Internal server error" })
    }
}