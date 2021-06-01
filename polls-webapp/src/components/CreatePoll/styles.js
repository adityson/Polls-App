import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({

    formPaper: {
        padding: theme.spacing(2),
    },
    form : {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    formEle: {
        marginTop: theme.spacing(1),
    }
}))

export default useStyles
