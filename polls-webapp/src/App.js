import { useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
import Header from './components/Header/Header'
import PollsAll from './components/PollsAll/PollsAll'
import CreatePoll from './components/CreatePoll/CreatePoll'
import '@fontsource/roboto'

import useStyles from './styles'

import { useDispatch } from 'react-redux'
import { getPolls } from './actions/pollActions'

function App() {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPolls());
    }, [dispatch]);

  return (

      <Container maxWidth='lg'>
          <Header />
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
      </Container>
  );
}

export default App;
