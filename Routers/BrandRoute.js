const { createBrand } = require("../Controllers/BrandController");

const router = require("express").Router();

router.route("/brand")
    .post(createBrand)



module.exports = router