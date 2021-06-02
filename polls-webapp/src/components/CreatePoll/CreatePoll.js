import { useState } from 'react'
import { Button, Paper, Typography, TextField, InputLabel, MenuItem, Select, FormControl } from '@material-ui/core'
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { useDispatch } from 'react-redux'

import useStyles from './styles'
import { createPoll } from '../../actions/pollActions'

const CreatePoll = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const [pollData, setPollData] = useState({
        subject: '',
        duration: '',
        choices: []
    })

    const [choice1Data, setChoice1Data] = useState({
        text: '',
        votes: 0,
    })
    const [choice2Data, setChoice2Data] = useState({
        text: '',
        votes: 0,
    })
    const [choice3Data, setChoice3Data] = useState({
        text: '',
        votes: 0,
    })
    const [choice4Data, setChoice4Data] = useState({
        text: '',
        votes: 0,
    })

    const [addCounter, setAddCounter] = useState(0);
    const addOptionClick = () => {
        setAddCounter(addCounter+1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let currentChoices = [];
        if(choice1Data.text){
            currentChoices = [...currentChoices, choice1Data];
            setChoice1Data({text: '', votes: 0});
        }
        if(choice2Data.text){
            currentChoices = [...currentChoices, choice2Data];
            setChoice2Data({text: '', votes: 0});
        }
        if(choice3Data.text){
            currentChoices = [...currentChoices, choice3Data];
            setChoice3Data({text: '', votes: 0});
        }
        if(choice4Data.text){
            currentChoices = [...currentChoices, choice4Data];
            setChoice4Data({text: '', votes: 0});
        }

        dispatch(createPoll({ ...pollData, choices: currentChoices }));

        setPollData({
            subject: '',
            duration: '',
            choices: []
        })
    };

    return (
        <Paper className={classes.formPaper}>
            <form className={classes.form} noValidate autoComplete='off' onSubmit={handleSubmit}>

                <Typography variant='h5'> Create Poll</Typography>

                <TextField 
                    variant='outlined' label='Subject' fullWidth className={classes.formEle}
                    value={pollData.subject}
                    onChange={(e) => setPollData({...pollData, subject: e.target.value})}
                />

                <FormControl fullWidth className={classes.formEle} variant='outlined'>
                    <InputLabel id='select-duration'>Duration</InputLabel>
                    <Select 
                        labelId='select-duration' 
                        value={pollData.duration} 
                        onChange={(e) => setPollData({...pollData, duration: e.target.value})}
                        label='Duration'
                    >
                        <MenuItem value={1}>1 Day</MenuItem>
                        <MenuItem value={2}>2 Days</MenuItem>
                        <MenuItem value={3}>3 Days</MenuItem>
                        <MenuItem value={4}>4 Days</MenuItem>
                        <MenuItem value={5}>5 Days</MenuItem>
                        <MenuItem value={6}>6 Days</MenuItem>
                        <MenuItem value={7}>7 Days</MenuItem>
                    </Select>
                </FormControl>

                <TextField 
                    variant='outlined' label='Option 1' fullWidth className={classes.formEle}
                    value={choice1Data.text}
                    onChange={(e) => setChoice1Data({...choice1Data, text: e.target.value})}
                />
                <TextField 
                    variant='outlined' label='Option 2' fullWidth className={classes.formEle}
                    value={choice2Data.text}
                    onChange={(e) => setChoice2Data({...choice2Data, text: e.target.value})}
                />
                {addCounter>=1 && <TextField 
                    variant='outlined' label='Option 3' fullWidth className={classes.formEle}
                    value={choice3Data.text}
                    onChange={(e) => setChoice3Data({...choice3Data, text: e.target.value})}
                />}
                {addCounter>=2 && <TextField 
                    variant='outlined' label='Option 4' fullWidth className={classes.formEle}
                    value={choice4Data.text}
                    onChange={(e) => setChoice4Data({...choice4Data, text: e.target.value})}
                />}

                <Button 
                    className={classes.formEle} 
                    startIcon={<AddCircleOutlineRoundedIcon />}
                    onClick={addOptionClick}
                    disabled={addCounter>=2}
                > Add Option(s) 
                </Button>

                <Button 
                    className={classes.formEle} 
                    color='primary' 
                    variant='contained' 
                    type='submit' 
                    fullWidth
                >
                    Submit
                </Button>

            </form>
        </Paper>
    )
}


export default CreatePoll
