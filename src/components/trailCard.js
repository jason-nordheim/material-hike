import React from 'react'
import { useStyles } from '../pages/styles'
import { 
    Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, 
    GridListTile, ListSubheader, GridListTileBar
} from '@material-ui/core'

const TrailCard = ({ trail }) => {
    const classes = useStyles() 
    return (
        <GridListTile>
            <Card className={classes.trailCard} style={{ height: 'auto' }}>
                <CardHeader className={classes.trailCardHeader}
                    title={trail.name}
                    subheader={trail.summary}
                /> 
                <CardMedia className={classes.trailCardMedia}
                    image={trail.imgSmall}
                    title={trail.name}
                />
                <CardContent>

                </CardContent>
            </Card>
        </GridListTile>
    )
}

export default TrailCard