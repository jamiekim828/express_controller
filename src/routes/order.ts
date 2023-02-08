import { Router } from 'express';

import {
  getAllOrders,
  createOrder,
  editOrderInfo,
  deleteOrder,
} from '../controllers/order';

const router = Router();

router.get('/', getAllOrders);
router.post('/:id', createOrder);
router.put('/:id', editOrderInfo);
router.delete('/:id', deleteOrder);

export default router;
