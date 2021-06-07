import { useState } from 'react'
import { Container, Paper, Avatar, Typography, Grid, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'

import useStyles from './styles'

const Auth = () => {

    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSubmit = () => {}
    const handleChange = () => {}
    const handleShowPassword = () => setShowPassword((prevVal) => !prevVal);
    const switchMode = () => {
        setIsSignUp((prevVal) =>  !prevVal);
        handleShowPassword(false);
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.formPaper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} noValidate autoComplete='off' onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignUp && (
                            <>
                            <Input
                                name='firstName' label='First Name' 
                                handleChange={handleChange} autoFocus half
                            />
                            <Input
                                name='lastName' label='Last Name' 
                                handleChange={handleChange} half 
                            />
                            </>
                        )}

                        <Input
                            name='email' label='Email' 
                            handleChange={handleChange} type='email'
                        />
                        <Input
                            name='password' label='Password' handleChange={handleChange} 
                            type={showPassword ? 'text' : 'password'} 
                            handleShowPassword={handleShowPassword}
                        />
                        {isSignUp && 
                        <Input name='confirmPassword' label='Confirm Password' 
                            handleChange={handleChange} type='password'
                        />}
                    </Grid>
                    <Button type='submit' className={classes.submit} fullWidth variant='contained'>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justify='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignUp ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign up' }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;
