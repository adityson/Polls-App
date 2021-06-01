import { useEffect } from 'react'
import Header from './components/Header/Header'
import PollsAll from './components/PollsAll/PollsAll'
import CreatePoll from './components/CreatePoll/CreatePoll'
import { Container, Grid } from '@material-ui/core'
import '@fontsource/roboto'

import { useDispatch } from 'react-redux'

import { getPolls } from './actions/pollActions'

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPolls());
    }, [dispatch]);

  return (

      <Container maxWidth='lg'>
          <Header />
          <Container>
              <Grid container direction='row' justify='space-between'>
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
