import express, { Router } from 'express';

import { addNewUser, getAllUsers } from '../controllers/user';

const router = new Router();

router.route('/new').post(addNewUser);
router.route('/all').get(getAllUsers);

export default router;