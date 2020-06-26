import React from 'react'
import {Typography, Paper }  from '@material-ui/core/'
import { useStyles } from './styles'


const getHikes = () => {
  
}

const HikePage = () => {
    const classes = useStyles();
    return (
      <Paper className={classes.screen}>  
        <Typography variant="h3">Hike</Typography>
      </Paper>
    )
  }

export default HikePage 