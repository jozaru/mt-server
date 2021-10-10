import express from 'express';
import ProductsRoutes from './products.routes.js';
const router = express.Router();

router.get('/', (req, resp) => {
  resp.send('Connected to API');
});
router.use('/products', ProductsRoutes);

export default router;
