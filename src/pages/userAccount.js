import React from 'react'
import { Button, Box, FormControl, TextField, Typography } from '@material-ui/core'
import { useStyles } from '../hooks/useStyles'


const UserAccountPage = () => {
    const classes = useStyles()

    return (
        <Box className={classes.screen}>
            <Typography className={classes.screenTitle}>Social</Typography>
            <Box className={classes.userAccountFormContainer}>
                <Box className={classes.spacer} />
                <Box className={classes.logoContainer}>
                    <img src={require('../images/man-in-hike-svgrepo-com.svg')} alt="h1k3r" width="100%" />
                </Box>
                <Box className={classes.spacer} />
                <Box className={classes.userAccountForm}>
                    <FormControl className={classes.userAccountInputField}>
                        <TextField fullWidth htmlFor="username" id="component-simple" label="username" />
                    </FormControl>
                    <FormControl className={classes.userAccountInputField}>
                        <TextField fullWidth id="standard-basic" label="password" type="password" />
                    </FormControl>
                    <Box className={classes.spacer} />
                    <FormControl>
                        <Button variant="contained" >Login</Button>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
}

export default UserAccountPage