const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Poll = require('./models/poll');
const cors = require('cors');
const bodyParser = require('body-parser');

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

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

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
