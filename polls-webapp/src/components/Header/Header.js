import { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import PollRounded from '@material-ui/icons/PollRounded'

import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import useStyles from './styles'

const Header = ({ pageTitle }) => {

    const classes = useStyles();
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);

    const location = useLocation();

    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    const dispatch = useDispatch();
    const history = useHistory();

    const logoutHandler = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
        setUser(null);
    }

    return (
        <AppBar color='default' className={classes.appBar} position='static'>
            <Typography component={Link} to='/' style={{textDecoration:'none'}} className={classes.title} variant='h2' align='center'>{pageTitle} </Typography>
            <PollRounded style={{ color: '#690B3D', margin: 10, fontSize: 50}} />
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <>
                    <Avatar>{user.result.name.charAt(0)}</Avatar>
                    <Button variant='contained' onClick={logoutHandler}> Logout</Button>
                    </>
                ) : (
                    <Button component={Link} to='/auth'> Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

Header.defaultProps = {
    pageTitle: 'Online Polls'
}

export default Header
