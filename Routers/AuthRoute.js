const { registerAuth, loginAuth } = require("../Controllers/AuthController")

const router = require("express").Router()

router.post("/register", registerAuth)
router.post("/login", loginAuth)




module.exports = router