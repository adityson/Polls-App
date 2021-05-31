const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChoiceSchema = new Schema({
    choiceText: String,
    choiceVotes: Number,
});

const PollSchema = new Schema({
    subject: String,
    duration: String,
    votes: Number,
    choices: [ChoiceSchema],
})

module.exports = mongoose.model('Poll', PollSchema);
