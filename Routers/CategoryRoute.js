const { createCategory } = require("../Controllers/CategoryController");

const router = require("express").Router();

router.route("/category")
    .post(createCategory)



module.exports = router