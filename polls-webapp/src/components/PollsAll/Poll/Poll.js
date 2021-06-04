import { Typography, Card, CardContent, CardActions, Button, IconButton, Collapse, ButtonGroup } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';

import { DateTime, Duration } from 'luxon'
import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { deletePoll, likePoll, votePoll } from '../../../actions/pollActions'

import useStyles from './styles'

const Poll = ({poll}) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const DTduration = Duration.fromObject({ days: poll.duration});
    const DTcreated = DateTime.fromMillis(Date.parse(poll.createdAt));
    const DTexpire = DTcreated.plus(DTduration);

    const likeHandler = () => dispatch(likePoll(poll._id));
    const deleteHandler = () => dispatch(deletePoll(poll._id));

    const [expanded, setExpanded] = useState(false);
    const seeOptions = () => { setExpanded(!expanded); }

    return (
        <Card className={classes.mainCard}>

            <CardContent className={classes.headerCard}>
                <Typography variant='h6'>{poll.subject}</Typography>
                <Typography variant='body2'>{`Expires on: ${DTexpire.toLocaleString(DateTime.DATETIME_MED)}`}</Typography>

            </CardContent>

            <CardActions className={classes.actionsCard}>
                <IconButton aria-label='like-poll' onClick={likeHandler}>
                    <FavoriteBorderIcon color='secondary' />
                    <Typography> &nbsp; {poll.likes}</Typography>
                </IconButton>
                <IconButton 
                    aria-label='see-options' 
                    onClick={seeOptions}
                    className={`${classes.expand} ${expanded ? [classes.expandOpen] : ''}`}
                >
                    <ExpandMoreIcon />
                </IconButton>
                <IconButton aria-label='delete-poll' onClick={deleteHandler}>
                    <DeleteIcon style={{color: '#A1887F'}}/>
                </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent className={classes.btnGroup}>
                    <Typography variant='body2'>Votes: {poll.votes}</Typography>
                    <ButtonGroup orientation='vertical' variant='outlined' size='small'>

                    {poll.choices.map((choice) => (
                        <Button key={choice._id} onClick={() => dispatch(votePoll(poll._id, choice._id))}>{choice.text} &nbsp; {choice.votes}</Button>
                    ))}

                    </ButtonGroup>
                </CardContent>
            </Collapse>

        </Card>
    )
}

export default Poll
