import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ChoiceSchema = new Schema({
    text: String,
    votes: {
        type: [String],
        default: [],
    },
});

const PollSchema = new Schema({
    subject: String,
    duration: Number,
    author: String,
    votes: {
        type: [String],
        default: [],
    },
    likes: {
        type: [String],
        default: [],
    },
    choices: [ChoiceSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.model('Poll', PollSchema);
