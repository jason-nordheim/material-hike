import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    root: {
      margin: '-1vw -1vh', 
      padding: 0, 
      display: 'flex', 
      flexDirection: 'column',  
      justifyContent: 'flex-end',
      width: '100vw',
      minHeight: '98vh', 
      overflow: 'auto', 
    }, 
    nav: {
      margin: 0, 
      marginLeft: '-1vw', 
      bottom: 0, 
      padding: 0, 
      display: 'flex',
      position: 'absolute', 
      width: '98%',
      zIndex: 1, 
    },
    navItem: {
      border: 0, 
      padding: 0 
    },
    screen: {
      marginRight: '2vw', 
      marginLeft: '2vw', 
      padding: 0, 
      flex: 1, 
      flexGrow: 1, 
      flexDirection: 'flex-start', 
      marginBottom: '80px', 
      overflow: 'auto',
    }, 
    screenTitle: {
      marginTop: '-1vh', 
      marginLeft: '2vw', 
      marginBottom: '2vh',  
      paddingTop: '1vh', 
      textAlign: 'center', 
      fontSize: '36px', 
      borderRadius: '5px', 
      backgroundColor: 'hsl(107, 59%, 31%)'
    }, 
    trailCardImageContainer: {
      backgroundColor: 'gray',
      height: '100%', 
      textAlign: 'center',
      lineHeight: '100%'
    }, 
    logoContainer: {
      display: 'flex',
    },
    userAccountFormContainer: {
      display: 'flex', 
      flex: 1, 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      height: '100%'
    },
    userAccountForm: {
      width: '100%',
      display: 'flex', 
      flex: 1, 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
    }, 
    spacer: {
      height: '5vh'
    },
    userAccountInputField: {
      width: '90%'
    }
  });