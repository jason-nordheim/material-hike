import React from 'react'
import { Box, GridList, GridListTile, ListSubheader, GridListTileBar }  from '@material-ui/core/'
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from '../hooks/useStyles'

const HikePage = ({ position, error, trails, changePosition }) => {
  const classes = useStyles();  

  return (
    <Box className={classes.screen}>  
      <GridList>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Hike</ListSubheader>
        </GridListTile>
        {
            trails?.map(trail => {
              const imgUrl = trail.imgSmall ? trail.imgSmall 
                : trail.imgSmallMed ? trail.imgSmallMed 
                  : trail.imgMedium ? trail.imgMedium 
                    : require('../images/no-image.png')
              
              const width = imgUrl === require('../images/no-image.png') ? '20%' : '100%'

              return (
                <GridListTile cols={2} key={trail.name}>
                <div className={classes.trailCardImageContainer}>
                  <img src={imgUrl} alt={trail.name} width={width} />
                </div>
                <GridListTileBar
                  title={trail.name}
                  subtitle={<span>{trail.summary}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${trail.name}`}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
                </GridListTile>
              )
            })
          }
      </GridList>
    </Box>
  )
}

export default HikePage 