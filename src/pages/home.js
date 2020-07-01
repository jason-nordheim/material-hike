import React from 'react'
import { useStyles } from '../hooks/useStyles'
import { Box, Typography }  from '@material-ui/core/'


const HomePage = ({ authState, authDispatch, login }) => {
  const classes = useStyles(); 
  
  return (
    <Box className={classes.screen}>
      <Typography className={classes.screenTitle}>Home</Typography>
      <Typography>
        Welcome <b>{authState.username}</b> to H1k3r!
      </Typography>
    </Box>
  );
};

export default HomePage