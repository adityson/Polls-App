const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Poll = require('./models/poll');

// Connecting to Database
const dbUrl ='mongodb://localhost:27017/polls-app';
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

mongoose.connection.on("error", console.error.bind(console, "connection error:"));
mongoose.connection.once("open", () => {
    console.log("Database Connected!!");
})


// Defining Routes
app.get('/', (req,res) => {
    res.send('Home route');
})

app.get('/polls', async(req, res) => {
    try{
        const polls = await Poll.find({});
        res.send(polls);
    } catch(err) {
        res.send({message: err.message})
    }
})

app.post('/polls', async(req,res) => {
    //const poll = new Poll({
        //subject: 'Who will lose AO final?',
        //duration: '6 days',
        //votes: 7,
        //choices: [
            //{ choiceText: 'Novak Djokovic', choiceVotes: 2 },
            //{ choiceText: 'Janik Sinner', choiceVotes: 5 },
        //]
    //});
    try{
        const poll = new Poll(req.body);
        await poll.save();
        res.send(poll);
    } catch(err) {
        res.send({message: err.message});
    }
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})
