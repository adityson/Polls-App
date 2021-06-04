import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

import Poll from './models/poll.js';
import pollRoutes from './routes/polls.js';

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

// Required to parse form recieved from axios
app.use(bodyParser.json());

// Defining Routes
app.use('/polls', pollRoutes);

app.get('/', (req,res) => {
    res.send('Home route');
})


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})
