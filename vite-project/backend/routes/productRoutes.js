import express from 'express';

import { getProducts, getProductById, getCategorys } from '../controllers/productController.js';

const router = express.Router();

// @route   GET /api/products
router.get('/', getProducts);

// @route   GET /api/categorys
router.get('/categorys', getCategorys);


// Fetch single product by ID
router.get('/:id', getProductById);



export default router;
