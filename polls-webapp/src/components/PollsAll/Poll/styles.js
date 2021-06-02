import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({

    mainCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        //height: '100%',
        borderRadius: '15px',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest, 
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    actionsCard: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 16px 8px 16px',
    },
}))

export default useStyles
