const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "Too Sort"],
        maxlength: [32, "Too Long"]
    },
    slug: {
        type: String,
        required: true
    },
    fontIcon: {
        type: String,
        default: ''
    },
    avatar: {
        type: String,
        default: ""
    },
    cover: {
        type: String,
        default: ""
    },
    isFeature: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })


module.exports = mongoose.model("category", categorySchema)