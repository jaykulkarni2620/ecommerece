import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import contactRoutes from './routes/contactRoutes.js';




const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(express.json());
app.use('/api/products', productRoutes); // Route prefix should not include trailing slash
// Note: The category route should be part of the same route file or set up separately if needed
app.use('/api/contact', contactRoutes);

app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
