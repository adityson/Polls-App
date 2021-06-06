import PropTypes from 'prop-types'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import PollRounded from '@material-ui/icons/PollRounded'

import { Link } from 'react-router-dom'

import useStyles from './styles'

const Header = ({ pageTitle }) => {

    const classes = useStyles();
    
    const user = null;

    return (
        <AppBar color='default' className={classes.appBar} position='static'>
            <Typography component={Link} to='/' style={{textDecoration:'none'}} className={classes.title} variant='h2' align='center'>{pageTitle} </Typography>
            <PollRounded style={{ color: '#690B3D', margin: 10, fontSize: 50}} />
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <Avatar>{user.result.name.charAt(0)}</Avatar>
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

Header.propTypes = {
    pageTitle: PropTypes.string.isRequired
}

export default Header
