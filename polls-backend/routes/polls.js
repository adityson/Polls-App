import express from 'express';
const router = express.Router();

import { getPolls, createPoll, deletePoll, likePoll, votePoll } from '../controllers/polls.js'

router.get('/', getPolls);
router.post('/', createPoll);
router.delete('/:id', deletePoll);
router.patch('/:id/like', likePoll);
router.patch('/:id/:choiceId', votePoll);

export default router;
