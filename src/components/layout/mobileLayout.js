import React from 'react'
import MobileNavigation from '../mobile/nav/mobileNavigation'
import { useAuthorization } from '../../hooks/useAuthorization'
import { useStyles } from '../../hooks/useStyles'
import LoginPage from '../../pages/login'
import SignUpPage from '../../pages/signup'

const MobileLayout = props => {
  const classes = useStyles();
  const [authState, authDispatch, login]= useAuthorization()

  return <SignUpPage /> 
  if (!authState.isLoggedIn) {
    return <LoginPage authState={authState} authDispatch={authDispatch} login={login} /> 
  } else {
    return (
      <>
        <main>
          {props.children}
        </main>
        <footer>
          <MobileNavigation
            authState={authState}
            authDispatch={authDispatch}
            login={login}
          />
        </footer>
      </> 
    );
  }
}

export default MobileLayout