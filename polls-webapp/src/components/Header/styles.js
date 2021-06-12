import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        padding: '10px 40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF8E1',
    },
    titleDiv: {
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        color: '#690B3D',
    },
    loginProfile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '200px'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '200px',
    }
}))

export default useStyles
