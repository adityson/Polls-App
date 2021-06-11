import { Container } from '@material-ui/core'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import '@fontsource/roboto'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer 
              position='bottom-center'
              autoClose={3000}
          />
      </BrowserRouter>
  );
}

export default App;
