const Jwt = require("jsonwebtoken")

const GenerateToken = (userId) => {
    return Jwt.sign({ userId }, process.env.JWT_KEY, {
        expiresIn: "1day"
    })
}


module.exports = GenerateToken