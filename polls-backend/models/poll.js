import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ChoiceSchema = new Schema({
    text: String,
    votes: Number,
});

const PollSchema = new Schema({
    subject: String,
    duration: Number,
    votes: {
        type: Number,
        default: 0,
    },
    likes: {
        type: Number,
        default: 0,
    },
    choices: [ChoiceSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.model('Poll', PollSchema);
