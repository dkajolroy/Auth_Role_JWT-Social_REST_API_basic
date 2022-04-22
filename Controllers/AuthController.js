const UserModel = require("../Models/UserModel")
const bcrypt = require("bcrypt")
const GenerateToken = require("../Helpers/GenerateToken")

// Name:   Register Auth 
// Method: POST Method
// Access: any
const registerAuth = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password)
        return res.status(401).send({ message: "Enter valid information" })
    const findUser = await UserModel.findOne({ email: email.toLowerCase() })
    try {
        if (!findUser) {
            const hashPass = await bcrypt.hashSync(password.toString(), 10)
            const createUser = await UserModel.create({ name, email: email.toLowerCase(), password: hashPass })
            res.status(201).send({ message: "Registration Success", createUser })
        } else {
            res.status(401).send({ message: "User already exist" })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}


// Name:   Login Auth 
// Method: POST Method
// Access: any
const loginAuth = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password)
        return res.status(401).send({ message: "Enter valid information" })
    const findUser = await UserModel.findOne({ email })
    try {
        if (findUser && await bcrypt.compare(password.toString(), findUser.password)) {
            res.send({
                name: findUser.name,
                email: findUser.email,
                icon: findUser.icon,
                token: GenerateToken(findUser._id)
            })
        } else {
            res.status(401).send({ message: "Email or Password is wrong" })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}


// Export This Controller
module.exports = {
    registerAuth,
    loginAuth
}