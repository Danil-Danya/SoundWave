import express from 'express';

import users from '../controllers/UserController.js';

const router = express.Router();

router.post('/user-create', users.createUser);

export default router;