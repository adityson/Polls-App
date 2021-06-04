import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({

    formPaper: {
        padding: theme.spacing(2),
        borderRadius: '10px',
        backgroundColor: '#FFF8E1',
    },
    form : {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    formEle: {
        marginTop: theme.spacing(1),
    },
    wrapIcon: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        color: '#3E2723'
    }
}))

export default useStyles
