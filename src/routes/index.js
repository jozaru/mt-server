import express from 'express';
import ProductsRoutes from './products.routes.js';
import UsersRoutes from './users.routes.js';
const router = express.Router();

router.get('/', (req, resp) => {
  resp.send('Connected to API');
});
router.use('/products', ProductsRoutes);
router.use('/users', UsersRoutes);

export default router;
