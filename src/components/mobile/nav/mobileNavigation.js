import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import EventIcon from "@material-ui/icons/Event";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { useStyles } from "../../../hooks/useStyles";
import { Link } from "react-router-dom";

const MobileNavigation = ({ authState, authDispatch, login }) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);

  return (
    <nav>
      <BottomNavigation
        className={classes.nav}
        value={page}
        onChange={(event, newPage) => setPage(newPage)}
        showLabels
      >
        <Link to="/">
          <BottomNavigationAction
            className={classes.navItem}
            label="Home"
            icon={<HomeIcon />}
          />
        </Link>
        <BottomNavigationAction
          className={classes.navItem}
          label="Social"
          icon={<GroupIcon />}
        />
        <BottomNavigationAction
          className={classes.navItem}
          label="Events"
          icon={<EventIcon />}
        />
        <BottomNavigationAction
          className={classes.navItem}
          label="Map"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          className={classes.navItem}
          label="Hike"
          icon={<DirectionsWalkIcon />}
        />
      </BottomNavigation>
    </nav>
  );
};

export default MobileNavigation;
