import { Typography, Card, CardContent, CardActions, Button, IconButton, Collapse } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import { DateTime, Duration } from 'luxon'
import { useState } from 'react'

import useStyles from './styles'

const Poll = ({poll}) => {

    const classes = useStyles();

    const DTduration = Duration.fromObject({ days: poll.duration});
    const DTcreated = DateTime.fromMillis(Date.parse(poll.createdAt));
    const DTexpire = DTcreated.plus(DTduration);

    const voteHandler = () => {console.log('Imma Vote')}
    const likeHandler = () => {console.log('Imma Like')}
    const deleteHandler = () => {console.log('Imma Delete')}

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
                </IconButton>
                <IconButton 
                    aria-label='see-options' 
                    onClick={seeOptions}
                    className={`${classes.expand} ${expanded ? [classes.expandOpen] : ''}`}
                >
                    <ExpandMoreIcon />
                </IconButton>
                <IconButton aria-label='delete-poll' onClick={deleteHandler}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    {poll.choices.map((choice) => (
                        <Typography variant='body1' key={choice._id}>{choice.text}</Typography>
                    ))}

                    <Button variant='outlined' size='small' color='secondary' onClick={voteHandler}>Vote</Button>
                </CardContent>
            </Collapse>

        </Card>
    )
}

export default Poll
