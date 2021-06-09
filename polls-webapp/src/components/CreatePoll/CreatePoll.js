import { useState } from 'react'
import { Button, Paper, Typography, TextField, InputLabel, MenuItem, Select, FormControl } from '@material-ui/core'
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import CreateIcon from '@material-ui/icons/Create';
import FormHelperText from '@material-ui/core/FormHelperText';

import { useDispatch } from 'react-redux'

import useStyles from './styles'
import { createPoll } from '../../actions/pollActions'

const CreatePoll = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('profile'));

    const [pollData, setPollData] = useState({
        subject: '',
        duration: '',
        choices: []
    })

    const [choice1Data, setChoice1Data] = useState({
        text: '',
        votes: [],
    })
    const [choice2Data, setChoice2Data] = useState({
        text: '',
        votes: [],
    })
    const [choice3Data, setChoice3Data] = useState({
        text: '',
        votes: [],
    })
    const [choice4Data, setChoice4Data] = useState({
        text: '',
        votes: [],
    })

    const [addCounter, setAddCounter] = useState(0);
    const addOptionClick = () => {
        setAddCounter(addCounter+1);
    };

    const [handleError, setHandleError] = useState(false);
    let optionCounter = 0;
    const handleSubmit = (e) => {
        e.preventDefault();

        let currentChoices = [];
        if(choice1Data.text){
            optionCounter += 1;
            currentChoices = [...currentChoices, choice1Data];
        }
        if(choice2Data.text){
            optionCounter += 1;
            currentChoices = [...currentChoices, choice2Data];
        }
        if(choice3Data.text){
            optionCounter += 1;
            currentChoices = [...currentChoices, choice3Data];
        }
        if(choice4Data.text){
            optionCounter += 1;
            currentChoices = [...currentChoices, choice4Data];
        }

        if(pollData.subject==='' || pollData.duration==='' || optionCounter<2){
            setHandleError(true); 
            return;
        }

        dispatch(createPoll({ ...pollData, choices: currentChoices }));

        setAddCounter(0);
        optionCounter = 0;
        setHandleError(false);
        setChoice1Data({text: '', votes: []});
        setChoice2Data({text: '', votes: []});
        setChoice3Data({text: '', votes: []});
        setChoice4Data({text: '', votes: []});
        setPollData({
            subject: '',
            duration: '',
            choices: []
        })
    };

    if(!user){
        return (
            <Paper className={classes.formPaper}>
                <Typography variant='h6' align='center'>
                    Sign In to Create, Vote and much more!!
                </Typography>
            </Paper>
        )
    }

    return (
        <Paper className={classes.formPaper}>
            <form className={classes.form} noValidate autoComplete='off' onSubmit={handleSubmit}>

                <Typography variant='h5' className={classes.wrapIcon}> Create <CreateIcon /> </Typography>

                <TextField 
                    variant='outlined' label='Subject' fullWidth className={classes.formEle}
                    value={pollData.subject}
                    error={handleError && pollData.subject===''} helperText={(handleError && pollData.subject==='') ? 'Mandatory':''}
                    onChange={(e) => setPollData({...pollData, subject: e.target.value})}
                />

                <FormControl
                    fullWidth className={classes.formEle} variant='outlined'
                    error={handleError && pollData.duration===''}
                >
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
                    {(handleError && pollData.duration==='') ? <FormHelperText>Mandatory</FormHelperText> : ''}
                </FormControl>

                <FormControl fullWidth error={handleError && optionCounter<2}>
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

                {(handleError && optionCounter<2 && <FormHelperText>Required minimum 2 options</FormHelperText>)}
                </FormControl>

                <Button 
                    className={classes.formEle} 
                    startIcon={<AddCircleOutlineRoundedIcon />}
                    onClick={addOptionClick}
                    disabled={addCounter>=2}
                > Add Option(s) 
                </Button>

                <Button 
                    className={classes.formEle} 
                    variant='contained' 
                    style={{backgroundColor: '#880E4F', color: 'white'}}
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
