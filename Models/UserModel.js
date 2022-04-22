const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        default: "",
        max: 20,
        min: 3
    },
    name: {
        type: String,
        required: true,
        minlength: [3, "Minimum 3 Character For Name"],
        maxlength: [30, "Max 30 Character Valid"]
    },
    profileImage: {
        type: String,
        default: ''
    },
    coverImage: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    follower: [
        {
            type: mongoose.Types.ObjectId,
            ref: "user"
        }
    ],
    following: [
        {
            type: mongoose.Types.ObjectId,
            ref: "user"
        }
    ]
})

module.exports = mongoose.model("user", userSchema)