const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'category'
    },
    brand: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'brand'
    },
    title: {
        type: String,
        required: true
    },
    size: {
        type: Array,
        default: []
    },
    weight: {
        type: Number,
        default: 0
    },
    icon: {
        type: String,
        default: ''
    },
    images: {
        type: Array,
        default: []
    },
    countInStock: {
        type: Number,
        required: true
    },
    regularPrice: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
        default: 0
    }

}, { timestamps: true })

module.exports = mongoose.model("product", ProductSchema)