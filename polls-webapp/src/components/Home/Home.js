import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Grid } from '@material-ui/core'

import PollsAll from '../PollsAll/PollsAll'
import CreatePoll from '../CreatePoll/CreatePoll'

import { getPolls } from '../../actions/pollActions'

import useStyles from './styles'

const Home = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPolls());
    }, [dispatch]);

    return (
      <Container>
          <Grid className={classes.mainCon} container justify='space-between' spacing={3}>
              <Grid item xs={12} sm={7}>
              <PollsAll/>
              </Grid>
              <Grid item xs={12} sm={4}>
              <CreatePoll />
              </Grid>
          </Grid>
      </Container>
    )
}

export default Home;
