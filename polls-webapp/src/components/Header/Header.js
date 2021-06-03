import PropTypes from 'prop-types'
import { AppBar, Typography } from '@material-ui/core'
import useStyles from './styles'
import PollRounded from '@material-ui/icons/PollRounded'

const Header = ({ pageTitle }) => {
    const classes = useStyles();
    
    return (
        <AppBar color='default' className={classes.appBar} position='static'>
            <Typography className={classes.title} variant='h2' align='center'>{pageTitle} </Typography>
            <PollRounded style={{ color: '#690B3D', margin: 10, fontSize: 50}} />
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
