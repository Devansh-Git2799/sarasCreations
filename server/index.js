import dotenv from 'dotenv';

import connetToDatabase from './database.js';

import express from 'express';
import productRoutes from './route/productRoutes.js';

dotenv.config();
connetToDatabase();
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server Listens on port ${port}.`);
});
