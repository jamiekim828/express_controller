import { Router } from 'express';

import {
  getAllUsers,
  createUser,
  editUserInfo,
  deleteUser,
} from '../controllers/user';

const router = Router();

router.get('/', getAllUsers);
router.post('/:id', createUser);
router.put('/:id', editUserInfo);
router.delete('/:id', deleteUser);

export default router;
