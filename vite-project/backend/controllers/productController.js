import fetch from 'node-fetch';
import asyncHandler from 'express-async-handler';

// URL for random test API (JSONPlaceholder posts as mock product data)
const API_URL = 'https://fakestoreapi.com/products';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const response = await fetch(API_URL);
  const data = await response.json();
//   console.log("all data", data);
  res.json(data);  // Send fetched data as response
});

// @desc    Fetch all categories (if applicable)
// @route   GET /api/categorys
// @access  Public
const getCategorys = asyncHandler(async (req, res) => {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log("all category", data.category);  // Make sure your API provides categories
  res.json(data);  // If there is no category field, modify this line accordingly
});

// @desc    Fetch a single product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const response = await fetch(`${API_URL}/${req.params.id}`);
  
  if (response.ok) {
    const data = await response.json();
    console.log("single data", data);
    res.json(data);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

export { getProducts, getProductById, getCategorys };
