import Poll from '../models/poll.js'

export const getPolls = async(req, res) => {
    const polls = await Poll.find({});
    res.status(200).json(polls);
}

export const createPoll = async(req,res) => {
    const poll = req.body;
    const newPoll = new Poll({ ...poll, author: req.user });
    await newPoll.save();
    res.status(200).json(newPoll);
}

export const deletePoll = async(req,res) => {
    const { id } = req.params;
    await Poll.findByIdAndDelete(id);
    res.json({ message: 'Post Deleted Successfully'});
}

export const likePoll = async(req,res) => {
    const { id } = req.params;

    const poll = await Poll.findById(id);

    const index = poll.likes.findIndex((id) => id === req.user);
    if(index === -1){
        poll.likes.push(req.user);
    } else {
        poll.likes = poll.likes.filter((id) => id !== req.user);
    }

    const updPoll = await Poll.findByIdAndUpdate(id, poll, { new: true });
    res.status(200).json(updPoll);
}

export const votePoll = async(req,res) => {
    const { id, choiceId } = req.params;

    const poll = await Poll.findById(id);
    const curChoices = poll.choices;

    const choIndex = curChoices.findIndex((choice) => choiceId === choice._id.toString());
    const choiceToUpd = curChoices[choIndex];

    //const prevChoice = curChoices.filter((choice) => (
        //choice.votes.findIndex((id) => id === req.user) !== -1
    //))

    const index = poll.votes.findIndex((id) => id === req.user);
    if(index === -1){
        poll.votes.push(req.user);
        choiceToUpd.votes.push(req.user);
    //} else if(choiceToUpd._id === prevChoice[0]._id){
        //console.log('Same clicked');
        //return res.status(403).json({message: 'this post you liked'});
    } else {
        return res.status(405).json({ message: 'You\'ve already voted once' });
    }

    const updChoices = curChoices.map((cho) => choiceId === cho._id.toString() ? choiceToUpd : cho);
    const updPoll = await Poll.findByIdAndUpdate(id, { ...poll, choices: updChoices }, {new: true});
    res.status(200).json(updPoll);
}
