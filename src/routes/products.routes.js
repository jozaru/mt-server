import express from 'express';
import { fetchProducts, addProduct, updateProduct, removeProduct } from '../services/products.service.js';
const router = express.Router();

router.get('/', (req, resp) => {
  fetchProducts(req.query)
    .then(products => resp.json(products))
    .catch(err => resp.status(500).json(err));
});

router.post('/add', (req, resp) => {
  addProduct(req.body)
    .then(products => resp.status(200).json(products))
    .catch(err => resp.status(500).json(err));
});

router.put('/update/:id', (req, resp) => {
  const { params: { id }, body} = req;
  updateProduct(id, body)
    .then(products => resp.status(201).json(products))
    .catch(err => resp.status(500).json(err));
});

router.delete('/remove/:id', (req, resp) => {
  const { params: { id } } = req;
  removeProduct(id)
    .then(products => resp.json(products))
    .catch(err => resp.status(500).json(err));
});

export default router;
