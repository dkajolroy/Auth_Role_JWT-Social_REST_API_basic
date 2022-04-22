const mongoose = require("mongoose")

const BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [32, "Too long"]
    },
    slug: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: ""
    },
    cover: {
        type: String,
        default: ''
    }
}, { timestamps: true })

module.exports = mongoose.model("brand", BrandSchema)