import Poll from '../models/poll.js'

export const getPolls = async(req, res) => {
    const polls = await Poll.find({});
    res.send(polls);
}

export const createPoll = async(req,res) => {
    const poll = new Poll(req.body);
    await poll.save();
    res.send(poll);
}

export const deletePoll = async(req,res) => {
    const { id } = req.params;
    await Poll.findByIdAndDelete(id);
    res.json({ message: 'Post Deleted Successfully'});
}

export const likePoll = async(req,res) => {
    const { id } = req.params;

    const poll = await Poll.findById(id);
    const updPoll = await Poll.findByIdAndUpdate(id, { likes: poll.likes + 1 }, { new: true });
    res.send(updPoll);
}

export const votePoll = async(req,res) => {
    const { id, choiceId } = req.params;

    const poll = await Poll.findById(id);
    const curChoices = poll.choices;
    const updChoices = curChoices.map((cho) => choiceId === cho._id.toString() ? {...cho.toObject(), votes: cho.votes + 1} : cho);
    const updVotes = poll.votes + 1;
    const updPoll = await Poll.findByIdAndUpdate(id, { votes: updVotes, choices: updChoices }, {new: true});
    res.send(updPoll);
}
