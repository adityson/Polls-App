import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    [theme.breakpoints.down('sm')]: {
        mainCon: {
            flexDirection: 'column-reverse',
        }
    }
}))

export default useStyles
