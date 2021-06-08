import express from 'express'
const router = express.Router();
import handleAsync from '../utils/handleAsync.js'

import { signin, signup } from '../controllers/user.js'

router.post('/signin', signin);
router.post('/signup', signup);

export default router;
