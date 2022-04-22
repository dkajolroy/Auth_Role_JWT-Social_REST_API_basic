const mongoose = require("mongoose")

const ConnectDB = (uri) => {
    mongoose.connect(uri)
        .then(() => console.log("Database Connected"))
        .catch((err) => console.log("Database Error"))
}


module.exports = ConnectDB