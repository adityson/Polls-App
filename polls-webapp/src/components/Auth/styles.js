import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({

    formPaper: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
        borderRadius: '10px',
        backgroundColor: '#FFF8E1',
        alignItems: 'center',
        marginTop: theme.spacing(8),
    },
    form : {
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3,0,2),
    },
    avatar: {
        margin: theme.spacing(1),
    },
}))

export default useStyles
