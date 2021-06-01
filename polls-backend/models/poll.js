const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChoiceSchema = new Schema({
    text: String,
    votes: Number,
});

const PollSchema = new Schema({
    subject: String,
    duration: Number,
    votes: Number,
    choices: [ChoiceSchema],
})

module.exports = mongoose.model('Poll', PollSchema);
