import { Router } from 'express';

import {
  getAllProducts,
  createProduct,
  editProductInfo,
  deleteProduct,
} from '../controllers/product';

const router = Router();

router.get('/', getAllProducts);
router.post('/:id', createProduct);
router.put('/:id', editProductInfo);
router.delete('/:id', deleteProduct);

export default router;
