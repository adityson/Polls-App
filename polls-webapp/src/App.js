import { Container } from '@material-ui/core'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import '@fontsource/roboto'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {

  return (

      <BrowserRouter>
          <Container maxWidth='lg'>
              <Header />
              <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/auth' exact component={Auth} />
              </Switch>
          </Container>
      </BrowserRouter>
  );
}

export default App;
