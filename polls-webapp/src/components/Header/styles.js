import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        padding: '5px 30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF8E1',
    },
    title: {
        color: '#690B3D',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
    }
}))

export default useStyles
