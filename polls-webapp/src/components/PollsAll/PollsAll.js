import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'

import Poll from './Poll/Poll';
import useStyles from './styles';

const PollsAll = () => {

    const classes = useStyles();

    const polls = useSelector((state) => state.polls);

    return (
        !polls.length ? <CircularProgress /> : (
            <Grid className={classes.gridMain} container spacing={3}>
                {polls.map((poll) => (
                    <Grid item key={poll._id} xs={12} sm={6}>
                        <Poll poll={poll}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default PollsAll
