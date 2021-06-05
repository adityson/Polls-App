import express from 'express';
const router = express.Router();
import handleAsync from '../utils/handleAsync.js';

import { getPolls, createPoll, deletePoll, likePoll, votePoll } from '../controllers/polls.js'

router.get('/', handleAsync(getPolls));
router.post('/', handleAsync(createPoll));
router.delete('/:id', handleAsync(deletePoll));
router.patch('/:id/like', handleAsync(likePoll));
router.patch('/:id/:choiceId', handleAsync(votePoll));

export default router;
