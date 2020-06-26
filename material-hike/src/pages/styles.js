import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    root: {
      margin: 0, 
      padding: 0, 
      display: 'flex', 
      flexDirection: 'column',  
      justifyContent: 'flex-end',
      width: '100vw',
      height: '98vh'
    }, 
    nav: {
      margin: 0, 
      padding: 0, 
      display: 'flex', 
    },
    screen: {
      margin: 0, 
      padding: 0, 
      flex: 1, 
      flexDirection: 'flex-start'
    }
  });