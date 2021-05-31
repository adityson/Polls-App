import { useState } from 'react'
import Header from './components/Header/Header'
import PollsAll from './components/PollsAll/PollsAll'
import CreatePoll from './components/CreatePoll/CreatePoll'
import { Container, Grid } from '@material-ui/core'
import '@fontsource/roboto'

function App() {

    const [polls, setPolls] = useState([
        {
            id: 1,
            subject: 'What is the Best AfterShave?',
            duration: '3 days',
        },
        {
            id: 2,
            subject: 'Who will win Wimbledon 2021?',
            duration: '5 days',
        },
        {
            id: 3,
            subject: 'Which is your favorite season?',
            duration: '1 day',
        }
    ])

  return (

      <Container maxWidth='lg'>
          <Header />
          <Container>
              <Grid container direction='row' justify='space-between'>
                  <Grid item xs={12} sm={7}>
                      <PollsAll polls={polls}/>
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
