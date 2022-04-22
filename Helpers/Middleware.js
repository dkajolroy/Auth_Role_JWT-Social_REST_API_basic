const Jwt = require("jsonwebtoken")
const UserModel = require("../Models/UserModel")

// Any Valid User
const protectedRoute = async (req, res, next) => {

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            const token = req.headers.authorization.split(" ")[1]
            const decode = Jwt.verify(token, process.env.JWT_KEY)
            req.user = { id: decode.userId, body: req.body }
            req.params = req.params
            next()
        } catch (error) {
            res.status(400).send({ message: "Login Expire or wrong token!! Login agin" })
        }
    } else {
        res.status(401).send({ message: "No Authorize! please Login" })
    }
}

// Only Admin
const adminOnly = async (req, res, next) => {
    const findUser = await UserModel.findById(req.user.id).select('-password')

    try {
        if (findUser.isAdmin) {
            req.user = findUser
            next()
        } else {
            res.status(400).send({ message: "User not allow this route" })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}





module.exports = {
    protectedRoute,
    adminOnly
}