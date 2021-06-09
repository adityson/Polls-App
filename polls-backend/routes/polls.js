import express from 'express';
const router = express.Router();
import handleAsync from '../utils/handleAsync.js';

import { getPolls, createPoll, deletePoll, likePoll, votePoll } from '../controllers/polls.js'

import { isLoggedIn } from '../middleware/auth.js'

router.get('/', handleAsync(getPolls));
router.post('/', isLoggedIn, handleAsync(createPoll));
router.delete('/:id', isLoggedIn, handleAsync(deletePoll));
router.patch('/:id/like', isLoggedIn, handleAsync(likePoll));
router.patch('/:id/:choiceId', isLoggedIn, handleAsync(votePoll));

export default router;
