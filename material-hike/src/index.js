import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import HomeIcon from '@material-ui/icons/Home'
import GroupIcon from '@material-ui/icons/Group'
import FavoriteIcon from '@material-ui/icons/Favorite'
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import HikePage from './pages/HikePage'
import { useStyles } from './pages/styles'
import { 
  BottomNavigation, 
  BottomNavigationAction, 
} from '@material-ui/core';





const App = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  return (
    <div className={classes.root}>
        <HikePage /> 
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            console.log(newValue)
            setValue(newValue)
          }}
          showLabels
          className={classes.nav}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Hike" icon={<DirectionsWalkIcon />} />
          <BottomNavigationAction label="Map" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="My Account" icon={<GroupIcon />} />
        </BottomNavigation>
    </div>
  );
}




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


