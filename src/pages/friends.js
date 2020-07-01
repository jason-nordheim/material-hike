import React, { useState} from 'react'
import { useStyles } from '../hooks/useStyles'
import { 
    Paper, Typography
} from '@material-ui/core'

const FriendsPage = () => {
    const classes = useStyles() 

    return (
        <Paper className={classes.screen}>  
            <Typography variant="h3">My Account</Typography>
            {
                // get friends updates 
                // 
            }
        </Paper>
    )
}

export default FriendsPage