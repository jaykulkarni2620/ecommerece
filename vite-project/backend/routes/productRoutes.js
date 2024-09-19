import express from 'express';

import { getProducts, getProductById, getCategorys } from '../controllers/productController.js';

const router = express.Router();

// @route   GET /api/products
router.get('/', getProducts);

// @route   GET /api/categorys
router.get('/categorys', getCategorys);

// @route   GET /api/products/:id
router.get('/:id', getProductById);



export default router;
