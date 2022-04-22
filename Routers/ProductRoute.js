const { createProduct, allProduct, brandProduct } = require("../Controllers/ProductController");

const router = require("express").Router();

router.route("/product")
    .post(createProduct)
    .get(allProduct)


router.route("/product/:_id")
    .get(brandProduct)


module.exports = router