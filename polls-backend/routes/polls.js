import express from 'express';
const router = express.Router();

import { getPolls, createPoll, deletePoll, likePoll } from '../controllers/polls.js'

router.get('/', getPolls);
router.post('/', createPoll);
router.delete('/:id', deletePoll);
router.patch('/:id/like', likePoll);

export default router;
