const asyncHandler = require('../middleware/async');
const Product = require('../products/models/Product');

// @desc      Get products
// @route     GET /products
// @route     GET /products/:product_id
// @access    Public
exports.getProducts = asyncHandler(async (req, res, next) => {
  if (req.params.productId) {
    const products = await Product.find({ productId: req.params.productId });

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } else {
    const products = await Product.find();

    res
      .status(200)
      .json({ success: true, count: products.length, data: products });
  }
});
