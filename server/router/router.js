import express from 'express';

import users from '../controllers/UserController.js';
import genres from '../controllers/GenreController.js';

const router = express.Router();

router.post('/user-create', users.createUser);
router.post('/user-initilazation', users.initializationUser);
router.post('/user-authotization', users.authorizationUser);
router.put('/user-edite-profile', users.editUserProfile);
router.delete('/user-delete', users.deleteUser);

router.post('/genre-create', genres.createGenre);
router.get('/genre-get-all', genres.getAllGenre);

export default router;